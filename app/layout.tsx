import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import RoofingFooter from "./components/Footer";
import Preloader from "./components/Preloader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Experts Roofing",
  description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, painting, fencing, siding & windows",
  openGraph: {
    title: "Home - Experts Roofing",
    description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, painting, fencing, siding & windows",
    url: "https://yourdomain.com",
    siteName: "Experts Roofing",
    images: [
      {
        url: "https://i.ibb.co/dwJ2BwWF/image.png",
        width: 1200,
        height: 630,
        alt: "Experts Roofing & Exteriors",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home -Experts Roofing",
    description: "Austin's premier roofing company. Full-service contractor for roofing, gutters, painting, fencing, siding & windows",
    images: ["https://i.ibb.co/dwJ2BwWF/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        {children}
        <RoofingFooter />
      </body>
    </html>
  );
}