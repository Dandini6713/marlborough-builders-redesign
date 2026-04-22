import type { Metadata } from "next";
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
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
