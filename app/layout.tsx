import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marlborough Builders | Joinery & Roofing in Prescot",
  description:
    "Modern joinery and roofing specialists serving Prescot, Merseyside and the North West. Domestic and commercial work, clear quotations, dependable workmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
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
      <body>{children}</body>
    </html>
  );
}
