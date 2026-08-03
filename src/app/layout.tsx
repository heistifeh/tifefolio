import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tifefolio.vercel.app";

const description =
  "Mobile & product engineer building reliable React Native and Expo apps. Two apps live on the App Store, plus Fitnex — a PWA now serving 200+ users. Available for freelance and full-time — 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Boluwatife Osineye — Mobile & Product Engineer",
    template: "%s · Boluwatife Osineye",
  },
  description,
  applicationName: "Boluwatife Osineye",
  keywords: [
    "Boluwatife Osineye",
    "Tife Osineye",
    "Mobile App Developer",
    "React Native Developer",
    "Expo Developer",
    "TypeScript",
    "Product Engineer",
    "Next.js",
    "PWA",
    "Fitnex",
    "Insta-Delivery",
    "Lagos",
    "Nigeria",
    "Freelance React Native",
    "Full-time React Native",
  ],
  authors: [{ name: "Boluwatife Osineye", url: siteUrl }],
  creator: "Boluwatife Osineye",
  publisher: "Boluwatife Osineye",
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    title: "Boluwatife Osineye — Mobile & Product Engineer",
    description,
    url: siteUrl,
    siteName: "Boluwatife Osineye",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boluwatife Osineye — Mobile & Product Engineer",
    description,
    creator: "@tifethedev",
    site: "@tifethedev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Boluwatife Osineye",
  alternateName: ["Tife Osineye", "heistifeh"],
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: "Mobile & Product Engineer",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  email: "mailto:boluwatifeosineye26@gmail.com",
  knowsAbout: [
    "React Native",
    "Expo",
    "TypeScript",
    "Next.js",
    "Mobile App Development",
    "Progressive Web Apps",
    "Product Engineering",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Ilorin",
  },
  sameAs: [
    "https://github.com/heistifeh",
    "https://www.linkedin.com/in/boluwatife-osineye-43b628269",
    "https://x.com/tifethedev",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Boluwatife Osineye",
  url: siteUrl,
  inLanguage: "en-US",
  publisher: {
    "@type": "Person",
    name: "Boluwatife Osineye",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Navbar />
        <main className="relative z-10 min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
