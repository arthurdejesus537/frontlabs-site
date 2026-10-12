import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

const page = site.pages.questions;
export const metadata: Metadata = { title: page.meta.title, description: page.meta.description };

/** /questions — FAQ completo com o card do Arch. */
export default function Questions() {
  return (
    <main id="conteudo">
      <PageHero data={page.hero} />
      <Faq data={page.faq} />
      <FinalCta />
    </main>
  );
}
