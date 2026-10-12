import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";

const page = site.pages.notFound;
export const metadata: Metadata = { title: page.meta.title };

/** 404 no estilo da marca: o mesmo topo das páginas + o formulário do preview. */
export default function NotFound() {
  return (
    <main id="conteudo">
      <PageHero data={{ tag: page.tag, title: page.title, titleTurn: page.titleTurn, lead: page.lead, primary: page.primary, secondary: page.secondary }} />
      <FinalCta />
    </main>
  );
}
