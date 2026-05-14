# Phase 1: Marlborough Builders Redesign — Claude Code Prompts

Run these prompts in order through Claude Code on your machine in the Marlborough Builders project directory.

---

## Prompt 1: Create the redesign branch

```
Create a new git branch called "redesign-v2" from the current main branch and switch to it. Do not make any other changes. Just create and checkout the branch. Show me the output of "git branch" after switching so I can confirm I'm on the right branch.
```

**After running:** Confirm you see `* redesign-v2` in the branch list before moving on.

---

## Prompt 2: Set up the design system (ART_BIBLE)

This is the big one. It establishes all the design tokens, typography, colours, spacing, and motion rules that every section of the site will follow.

```
I am redesigning the Marlborough Builders website (marlboroughbuilders.com) with a premium "Architectural Restraint" aesthetic. This is a joinery and roofing company based in Prescot, Merseyside. The redesign should feel like the website equivalent of walking into a well-built home: confident, quiet, precise. Not flashy, not cheap, not trying too hard.

IMPORTANT RULES:
- Do NOT use next/font/google. Self-host any fonts or use system fonts.
- Any interactive component must have 'use client' at the top of its file.
- Do NOT remove or modify any existing pages or components yet. Only ADD new files in this step.
- Preserve ALL existing files exactly as they are.

Create the following NEW files:

### 1. ART_BIBLE.md in the project root

A design reference document containing:

**Colour System:**
- Primary: Charcoal (#1a1a1a) for text and dark backgrounds
- Secondary: Warm slate (#2d2d2d) for cards and secondary surfaces
- Background: Warm white (#faf9f7) for main page backgrounds
- Accent: Aged brass (#b08d57) used SPARINGLY for CTAs, key details, and hover states only
- Accent hover: Darker brass (#8a6d3b)
- Muted text: (#6b6b6b) for secondary text and captions
- Border: (#e5e2dd) for subtle dividers and card edges
- Hero overlay: rgba(20, 20, 18, 0.65) for text legibility over images

**Typography:**
- Display/Headings: Georgia, "Times New Roman", serif (confident, architectural feel without needing external fonts)
- Body: system-ui, -apple-system, "Segoe UI", sans-serif (clean, readable)
- Heading weights: 400 (normal) for elegance, NOT bold (bold serif looks cheap)
- Body weights: 400 for body, 500 for emphasis
- Letter spacing: headings 0.02em (very slight), body normal
- Line height: headings 1.15, body 1.7
- H1: clamp(2.5rem, 5vw, 4rem)
- H2: clamp(1.75rem, 3.5vw, 2.75rem)
- H3: clamp(1.25rem, 2.5vw, 1.5rem)
- Body: clamp(1rem, 1.1vw, 1.125rem)
- Small/caption: 0.875rem
- Uppercase labels: 0.75rem, letter-spacing 0.15em, font-weight 500

**Spacing System:**
- Section padding: clamp(5rem, 10vw, 8rem) vertical
- Container max-width: 1200px with padding 1.5rem on mobile, 2rem on desktop
- Between sections: alternate between generous (8rem) and tighter (5rem) to create rhythm
- Card padding: 2rem to 2.5rem
- Between heading and body text: 1.5rem

**Motion Rules:**
- Scroll-triggered fade-up: opacity 0 to 1, translateY 30px to 0, duration 0.8s, ease cubic-bezier(0.25, 0.1, 0.25, 1)
- Stagger delay between items: 0.15s
- Image scale on hover: 1.0 to 1.03 over 0.6s (subtle, not aggressive)
- CTA hover: background colour transition 0.3s ease
- Page load: hero content fades in with 0.5s delay after image loads
- NO aggressive animations, NO bounce effects, NO sliding panels

**Photography Treatment:**
- Hero: full-bleed with dark overlay gradient (bottom heavier for text legibility)
- Gallery/project images: subtle border-radius (4px max), NO heavy rounded corners
- Hover state on gallery: slight scale + subtle shadow lift
- Aspect ratios: hero 16:9 on desktop / 4:3 on mobile, gallery cards 3:2

**Component Patterns:**
- Buttons primary: bg-accent text-white px-8 py-4, uppercase 0.75rem tracking-widest
- Buttons secondary: border-1 border-accent text-accent, same sizing
- Section labels: uppercase, small, accent colour, above section headings
- Dividers: thin 1px lines using border colour, max-width 60px, used sparingly
- Cards: warm white background, subtle border, generous padding, NO heavy shadows

### 2. Update tailwind.config.ts (or tailwind.config.js)

Extend the existing Tailwind config to ADD these design tokens (do NOT remove existing config, just extend):

colors: {
  brand: {
    charcoal: '#1a1a1a',
    slate: '#2d2d2d',
    warm: '#faf9f7',
    brass: '#b08d57',
    'brass-dark': '#8a6d3b',
    muted: '#6b6b6b',
    border: '#e5e2dd',
  }
}

fontFamily: {
  display: ['Georgia', '"Times New Roman"', 'serif'],
  body: ['system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
}

fontSize: (add clamp values as noted in the ART_BIBLE)

### 3. Create app/components/redesign/ScrollReveal.tsx

A reusable 'use client' component that wraps children and applies a scroll-triggered fade-up animation using IntersectionObserver. Props: delay (number, default 0), className (string, optional). Uses the motion values from the ART_BIBLE (opacity 0→1, translateY 30px→0, 0.8s duration). No external animation library needed, just CSS transitions triggered by adding a class when the element enters the viewport.

### 4. Create app/components/redesign/SectionLabel.tsx

A small component for the uppercase label that sits above section headings. Props: text (string). Renders as a span with uppercase, small text, accent colour, wide letter spacing per the ART_BIBLE.

### 5. Create app/components/redesign/Button.tsx

A button component with two variants: "primary" (filled brass background, white text) and "secondary" (brass border, brass text, transparent background). Props: variant, href (optional, renders as anchor if provided), children. Uses the ART_BIBLE button styles including hover transitions.

Show me all the files you create and confirm you have not modified any existing files.
```

**After running:** Check that the ART_BIBLE.md file is in the root, the Tailwind config has been extended (not replaced), and the three components exist in `app/components/redesign/`. Verify that NO existing pages or components have been changed.

---

## Prompt 3: Build the new hero section

```
Now build the new hero section for the Marlborough Builders homepage redesign. Read the ART_BIBLE.md first for all design tokens and rules.

IMPORTANT RULES:
- Do NOT use next/font/google. 
- This component must have 'use client' at the top of the file.
- Do NOT modify any existing components or pages. Only create NEW files.
- Import the ScrollReveal, SectionLabel, and Button components from app/components/redesign/.

Create: app/components/redesign/HeroSection.tsx

Design spec:

1. FULL-BLEED HERO IMAGE
   - Takes up the full viewport width and height (100vw x 100vh on desktop, 100vw x 85vh on mobile)
   - Uses the best available project image. Check the public/assets/images/gallery/ folder for images. Priority order:
     a. joinery/joinery-staircase-oak-overview.jpg (the oak staircase)
     b. joinery/oak-glass-balustrade-after.jpg (the oak balustrade)
     c. roofing/natural-slate-roof.jpg (the slate roof)
     d. general/marlborough-hero.png (the existing hero)
   - Use Next.js Image component with fill, priority, and quality={85}
   - Apply a gradient overlay: linear-gradient(to bottom, rgba(20,20,18,0.3) 0%, rgba(20,20,18,0.7) 100%)
   - Image should use object-cover and object-center

2. HERO CONTENT (positioned over the image, bottom-left on desktop)
   - Position: absolute, bottom 15%, left aligned with the site container (max-width 1200px, centered)
   - Content stack (top to bottom):
     a. Location label: "Prescot, Merseyside & the Northwest" using SectionLabel styling (uppercase, small, warm white text with slight opacity)
     b. Headline: "Built properly." on one line, "Finished right." on the next line. Using the display font (Georgia), clamp(2.5rem, 5vw, 4rem), font-weight 400, colour warm white (#faf9f7), line-height 1.15
     c. Subheadline: "Joinery and roofing with thirty years behind every detail." Body font, clamp(1rem, 1.5vw, 1.25rem), warm white with slight opacity (0.85), max-width 550px
     d. Two buttons side by side: "Request a quote" (primary, links to /contact) and "View our work" (secondary with white border/text variant, links to /gallery). On mobile stack vertically.
   - Apply ScrollReveal with staggered delays: label 0s, headline 0.15s, subheadline 0.3s, buttons 0.45s

3. SCROLL INDICATOR
   - Small downward chevron or line at bottom-center of the hero, gently bouncing with a CSS animation
   - Warm white, opacity 0.5
   - Hidden on mobile

4. HEADER OVERLAY AREA
   - Leave space at the top for the navigation to sit over the hero (transparent background nav)
   - The hero should extend behind where the nav will be

5. RESPONSIVE
   - Desktop: content bottom-left, generous sizing
   - Tablet: content bottom-left, slightly tighter
   - Mobile (below 768px): content centered, stacked vertically, 85vh height, buttons full-width and stacked

Also create: app/components/redesign/HeroPreview.tsx

A simple 'use client' wrapper page that renders ONLY the HeroSection so we can preview it in isolation. Export it as default. We will use this to test the hero before integrating it into the actual homepage.

Create: app/redesign-preview/page.tsx

A Next.js page at /redesign-preview that imports and renders HeroPreview. This is a temporary preview route so we can see the hero in the browser without touching the live homepage. Add a comment at the top of the file: "// TEMPORARY: Remove this route before merging to main"

Show me all files created. Confirm no existing files were modified.
```

**After running:** 
1. Start the dev server with `npm run dev`
2. Go to `localhost:3000/redesign-preview` in your browser
3. You should see the full-bleed hero with the overlay, headline, and buttons
4. Check it on mobile viewport too (use browser dev tools)
5. Send me a screenshot and we can refine from there

---

## Prompt 4: Build the redesigned navigation header

```
Read the ART_BIBLE.md first.

Create a new transparent navigation header that sits over the hero image. This is for the redesign only. Do NOT modify the existing header/navigation component.

IMPORTANT RULES:
- 'use client' at the top (it needs scroll detection and mobile menu state)
- Do NOT use next/font/google
- Do NOT modify any existing files

Create: app/components/redesign/Header.tsx

Design spec:

1. TRANSPARENT ON LOAD, SOLID ON SCROLL
   - Initially: fully transparent background, positioned absolute over the hero
   - On scroll (past 80px): background becomes brand-charcoal (#1a1a1a) with slight transparency (rgba(26,26,26,0.95)), position becomes fixed/sticky, subtle shadow appears
   - Transition: background and shadow over 0.3s ease

2. LAYOUT
   - Full width, max-width 1200px centered container inside
   - Height: 80px
   - Left: Marlborough Builders logo (use the existing SVG from /marlborough_builders_emblem_roundel_zoom.svg). Keep it at roughly 40-45px height. Next to it, "Marlborough Builders" in the display font (Georgia), warm white, font-size 1.1rem, and below that "Joinery & Roofing" in body font, 0.75rem, muted/opacity 0.7
   - Right: Nav links — Home, Joinery, Roofing, Gallery, About, Contact. Warm white text, body font, 0.85rem, uppercase, letter-spacing 0.08em. Hover: brass accent colour transition
   - Far right: Phone number "07939 551481" styled as a subtle link (warm white, body font) and a "Get a quote" button using the primary Button component (brass background)

3. MOBILE (below 768px)
   - Logo left, hamburger icon right (three lines, warm white, 24px)
   - Hamburger toggles a full-screen overlay menu (brand-charcoal background, centered nav links stacked vertically, generous spacing between items, close X button top-right)
   - Phone number and "Get a quote" button at the bottom of the mobile menu
   - Mobile menu animates: fade in over 0.3s

4. NAV DROPDOWN for Joinery and Roofing
   - On hover (desktop) or tap (mobile), show a simple dropdown with two links each:
     - Joinery: "Overview" (/joinery) and "Services" (/joinery/services)
     - Roofing: "Overview" (/roofing) and "Services" (/roofing/services)
   - Dropdown: brand-slate background, warm white text, subtle border, 0.2s fade-in

Update: app/redesign-preview/page.tsx

Add the new Header component above the HeroSection in the preview page so we can see them together. Make sure the hero content doesn't get hidden behind the header (the hero is full viewport height, so the header overlays the top portion).

Show me all files created/modified.
```

**After running:** Check the preview at `localhost:3000/redesign-preview`. The header should be transparent over the hero, turn solid when you scroll, and the mobile hamburger menu should work.

---

## After Phase 1: What to check

Before moving to Phase 2, verify all of this:

1. **Branch:** You're on `redesign-v2`, main is untouched
2. **ART_BIBLE.md** exists in root with full design system documented
3. **Tailwind config** extended with brand colours and fonts (existing config preserved)
4. **Three base components** exist in `app/components/redesign/`: ScrollReveal, SectionLabel, Button
5. **Hero section** renders at `/redesign-preview` with:
   - Full-bleed image with dark gradient overlay
   - "Built properly. Finished right." headline in Georgia
   - Location label and subheadline
   - Two CTA buttons (brass primary + outlined secondary)
   - Scroll-triggered fade-in animations
   - Responsive (check mobile too)
6. **Header** renders over the hero:
   - Transparent on load, solid on scroll
   - Logo + business name left, nav links right
   - Mobile hamburger menu works
   - Joinery/Roofing dropdowns work
7. **No existing files modified** (check with `git diff main` to confirm)

Once you're happy, commit on the redesign branch:

```
git add -A
git commit -m "Phase 1: Design system, hero section, and header for redesign-v2"
```

Do NOT merge to main or deploy yet. We'll keep building on this branch through all phases.

---

## Notes for Danny

- The hero headline "Built properly. Finished right." is a placeholder. If Darren has a preference or you want alternatives, we can swap it. Other options: "Thirty years of getting it right." or "Joinery and roofing, done to last."
- The brass accent (#b08d57) gives it warmth without feeling cheap. If it's too gold, we can shift it cooler.
- Georgia as the display font is a safe bet that avoids the next/font/google build issue while still looking premium. If you want something more distinctive later, we can self-host a font like Playfair Display or DM Serif Display.
- The `/redesign-preview` route is temporary. We'll remove it before merging to main.
