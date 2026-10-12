import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const shout = Anton({ subsets: ["latin"], weight: "400", variable: "--font-shout", display: "swap" });

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.meta.lang} className={`${sans.variable} ${mono.variable} ${shout.variable}`}>
      <body>{children}</body>
    </html>
  );
}
