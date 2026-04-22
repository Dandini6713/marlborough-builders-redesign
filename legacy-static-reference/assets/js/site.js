 document.addEventListener("DOMContentLoaded", () => {
   const header = document.querySelector("[data-header]");
   const mobileNav = document.querySelector("[data-mobile-nav]");
   const navToggle = document.querySelector("[data-nav-toggle]");
   const navToggleLabel = document.querySelector("[data-nav-toggle-label]");
   const filterButtons = document.querySelectorAll("[data-filter]");
   const filterCards = document.querySelectorAll("[data-category]");
   const yearTargets = document.querySelectorAll("[data-year]");

   const updateHeaderState = () => {
     if (!header) {
       return;
     }
     header.classList.toggle("is-scrolled", window.scrollY > 8);
   };

   updateHeaderState();
   window.addEventListener("scroll", updateHeaderState, { passive: true });

   if (navToggle && mobileNav) {
     navToggle.addEventListener("click", () => {
       const isOpen = mobileNav.classList.toggle("is-open");
       document.body.classList.toggle("nav-open", isOpen);
       navToggle.setAttribute("aria-expanded", String(isOpen));
       if (navToggleLabel) {
         navToggleLabel.textContent = isOpen ? "Close navigation" : "Open navigation";
       }
     });

     mobileNav.querySelectorAll("a").forEach((link) => {
       link.addEventListener("click", () => {
         mobileNav.classList.remove("is-open");
         document.body.classList.remove("nav-open");
         navToggle.setAttribute("aria-expanded", "false");
         if (navToggleLabel) {
           navToggleLabel.textContent = "Open navigation";
         }
       });
     });
   }

   if (filterButtons.length && filterCards.length) {
     filterButtons.forEach((button) => {
       button.addEventListener("click", () => {
         const filter = button.getAttribute("data-filter");
         filterButtons.forEach((item) => {
           item.classList.remove("is-active");
           item.setAttribute("aria-pressed", "false");
         });
         button.classList.add("is-active");
         button.setAttribute("aria-pressed", "true");

         filterCards.forEach((card) => {
           const category = card.getAttribute("data-category");
           const shouldShow = filter === "all" || filter === category;
           card.classList.toggle("is-hidden", !shouldShow);
         });
       });
     });
   }

   yearTargets.forEach((target) => {
     target.textContent = String(new Date().getFullYear());
   });
 });
