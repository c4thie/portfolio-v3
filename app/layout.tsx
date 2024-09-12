import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const mori = localFont({
  src: [
    {
      path: "../public/fonts/PPMori-Extralight.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/PPMori-SemiBold.otf",
      weight: "600",
    },
  ],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CuriousCat",
  description: "Made with <3 (and TypeScript, NextJS, and ThreeJS)",
  icons: {
    icon: "/_next/static/media/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      ></Script>
      <html lang="en">
        <body className="md:overflow-hidden overflow-auto">
          <Navbar />
          <main className="scene overflow-y-auto">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
