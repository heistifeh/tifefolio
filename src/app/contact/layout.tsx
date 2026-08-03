import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Boluwatife Osineye — mobile & product engineer available for freelance and full-time work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Boluwatife Osineye",
    description:
      "Freelance, full-time roles, or an interesting project — I read every message.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
