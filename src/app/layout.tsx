import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Giant Consult Ltd — Design & Build Engineering",
    template: "%s | Giant Consult Ltd",
  },
  description:
    "Giant Consult Ltd is a full-service engineering and construction firm specialising in architectural design, civil construction, and integrated MEP systems across Rwanda and the region.",
  keywords: [
    "construction Rwanda",
    "MEP engineering",
    "design build",
    "HVAC Rwanda",
    "civil engineering Kigali",
    "Giant Consult",
  ],
  authors: [{ name: "Giant Consult Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://www.giantconsult.com",
    siteName: "Giant Consult Ltd",
    title: "Giant Consult Ltd — Design & Build Engineering",
    description:
      "Full-service engineering & construction — architectural design, civil construction, and integrated MEP systems. Founded June 2016.",
    images: [
      {
        url: "/brand/logo.png",
        width: 400,
        height: 400,
        alt: "Giant Consult Ltd",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Giant Consult Ltd — Design & Build Engineering",
    description:
      "Full-service engineering & construction — architectural design, civil construction, and integrated MEP systems.",
  },
  metadataBase: new URL("https://www.giantconsult.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
