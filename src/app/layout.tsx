import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Boluwatife Eniola | Mobile App Developer",
    template: "%s | Boluwatife Eniola",
  },
  description:
    "Mobile app developer specializing in React Native and Expo, building reliable, user-focused apps and scalable platforms.",
  keywords: [
    "Mobile App Developer",
    "React Native",
    "Expo",
    "TypeScript",
    "Product Engineer",
    "Nigeria",
  ],
  authors: [{ name: "Boluwatife Eniola" }],
  creator: "Boluwatife Eniola",
  openGraph: {
    title: "Boluwatife Eniola | Mobile App Developer",
    description:
      "Mobile app developer specializing in React Native and Expo, building reliable, user-focused apps and scalable platforms.",
    url: siteUrl,
    siteName: "Tife Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Boluwatife Eniola - Mobile App Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boluwatife Eniola | Mobile App Developer",
    description:
      "Mobile app developer specializing in React Native and Expo, building reliable, user-focused apps and scalable platforms.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24"> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
