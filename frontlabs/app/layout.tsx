import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

/* DESIGN.md §3: Inter (variável, com tamanho ótico), Geist Mono nos rótulos, Bricolage só no nome. */
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", axes: ["opsz"], display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--font-mono", display: "swap" });
const brand = Bricolage_Grotesque({ subsets: ["latin"], weight: "variable", axes: ["opsz"], variable: "--font-brand", display: "swap" });

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.meta.lang} className={`${sans.variable} ${mono.variable} ${brand.variable}`} suppressHydrationWarning>
      <head>
        {/* marca a página como "com JS" antes da pintura: só então as entradas ao rolar escondem o conteúdo */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
