import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Inter } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import "./globals.css";

/* DESIGN.md §3: Inter (variável, com tamanho ótico), Geist Mono nos rótulos, Bricolage só no nome. */
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", axes: ["opsz"], display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--font-mono", display: "swap" });
const brand = Bricolage_Grotesque({ subsets: ["latin"], weight: "variable", axes: ["opsz"], variable: "--font-brand", display: "swap" });

export const metadata: Metadata = {
  title: { default: site.meta.title, template: `%s · Front Labs` },
  description: site.meta.description,
  robots: { index: false, follow: false },
};

/* nav e rodapé são os mesmos em todas as páginas; cada página traz o próprio <main id="conteudo"> */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.meta.lang} className={`${sans.variable} ${mono.variable} ${brand.variable}`} suppressHydrationWarning>
      <head>
        {/* marca a página como "com JS" antes da pintura: só então as entradas ao rolar escondem o conteúdo */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#conteudo" className="skip-link">{site.ui.skip}</a>
        <AnnouncementBar data={site.announcement} />
        <Header data={site.header} />
        {children}
        <Footer data={site.footer} logo={<Logo label={site.footer.brand} size="var(--t-logo-lg)" />} />
      </body>
    </html>
  );
}
