import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recent Work | Joinery & Roofing Projects | Marlborough Builders",
  description:
    "Photos of recent joinery and roofing projects from Marlborough Builders, including fitted kitchens, oak staircases, slate roofs and lead work across Prescot and Merseyside.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
