import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recent Work | Joinery & Roofing Projects | Marlborough Builders",
  description:
    "Photos of recent joinery and roofing projects from Marlborough Builders, including fitted kitchens, oak staircases, slate roofs and lead work across Prescot and Merseyside.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Recent Work | Joinery & Roofing Projects | Marlborough Builders",
    description:
      "Photos of recent joinery and roofing projects from Marlborough Builders, including fitted kitchens, oak staircases, slate roofs and lead work across Prescot and Merseyside.",
    url: "/gallery",
    images: [
      {
        url: "/assets/images/gallery/joinery/kitchen-installation.png",
        width: 1200,
        height: 630,
        alt: "Fitted kitchen by Marlborough Builders",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
