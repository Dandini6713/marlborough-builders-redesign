import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import SiteHeader from "./SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marlborough Builders | Joinery & Roofing in Prescot, Merseyside",
  description:
    "Family-run joinery and roofing company based in Prescot. Clear quotations, reliable communication and quality workmanship for homes and businesses across Merseyside and the Northwest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BF7LH87702"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BF7LH87702');`}
        </Script>
      </head>
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-col footer-brand">
              <Image
                src="/marlborough_builders_emblem_roundel.svg"
                alt="Marlborough Builders"
                width={48}
                height={48}
              />
              <strong className="footer-company">Marlborough Builders</strong>
              <span className="footer-tagline">Joinery and roofing specialists</span>
              <p>
                Family-run building company based in Prescot, delivering joinery
                and roofing work across Merseyside and the Northwest.
              </p>
            </div>

            <div className="footer-col">
              <h4>Joinery</h4>
              <ul>
                <li><a href="/joinery">Overview</a></li>
                <li><a href="/joinery/services">Services</a></li>
                <li>
                  <a href="https://www.instagram.com/marlboroughjoinerydivision/" target="_blank" rel="noopener noreferrer">
                    @marlboroughjoinerydivision
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Roofing</h4>
              <ul>
                <li><a href="/roofing">Overview</a></li>
                <li><a href="/roofing/services">Services</a></li>
                <li>
                  <a href="https://www.instagram.com/marlborough_roofing/" target="_blank" rel="noopener noreferrer">
                    @marlboroughroofing
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:07939551481">07939 551481</a></li>
                <li>28 Marlborough Road, Prescot, Merseyside, L34 6LE</li>
                <li>Monday to Friday, 9:00am to 5:30pm</li>
              </ul>
            </div>
          </div>

          <div className="footer-meta">
            <div className="container footer-meta-inner">
              <span>&copy; 2026 Marlborough Builders Ltd. All rights reserved.</span>
              <span>Registered in England &amp; Wales &middot; Company no. 15420682</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
