import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { Steps } from "@/components/sections/Steps";
import { FinalCta } from "@/components/sections/FinalCta";
import styles from "../pages.module.css";

const page = site.pages.howItWorks;
export const metadata: Metadata = { title: page.meta.title, description: page.meta.description };

/** /how-it-works — página de feature da Ploy: uma linha por etapa (mídia alternando lados) + passos + CTA. */
export default function HowItWorks() {
  return (
    <main id="conteudo">
      <PageHero data={page.hero} />
      <section data-section="feature-rows" className="section" aria-labelledby="rows-title">
        <div className="container">
          <h2 id="rows-title" className={`t-display ${styles.rowsHead}`}>{page.rowsTitle}</h2>
          <div className={styles.rows}>
            {page.rows.map((r, i) => <FeatureRow key={r.title} data={r} index={i} flip={i % 2 === 1} />)}
          </div>
        </div>
      </section>
      <Steps data={page.steps} />
      <FinalCta />
    </main>
  );
}
