import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote | Marlborough Builders, Prescot, Merseyside",
  description:
    "Get in touch for a clear quotation and honest advice on joinery or roofing work. Call 07939 551481 or send us a message. No obligation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
