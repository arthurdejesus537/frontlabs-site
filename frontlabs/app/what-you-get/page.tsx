import type { Metadata } from "next";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowList } from "@/components/ui/ArrowList";
import { PageHero } from "@/components/sections/PageHero";
import { Results } from "@/components/sections/Results";
import { FinalCta } from "@/components/sections/FinalCta";
import styles from "../pages.module.css";

const page = site.pages.whatYouGet;
export const metadata: Metadata = { title: page.meta.title, description: page.meta.description };

/** /what-you-get — cards de visão geral + um bloco por produto com lista com setas (DESIGN §6.4). */
export default function WhatYouGet() {
  return (
    <main id="conteudo">
      <PageHero data={page.hero} />
      <Results data={page.overview} />
      <section data-section="products" className="section" aria-label={page.overview.title}>
        <div className="container">
          {page.blocks.map((b) => (
            <article key={b.id} id={b.id} className={styles.block} aria-labelledby={`${b.id}-title`}>
              <div className={styles.blockHead}>
                <p className="t-label">{b.label}</p>
                <h2 id={`${b.id}-title`} className="t-display">{b.name}</h2>
                <p className={styles.blockPhrase}>{b.phrase}</p>
                {b.price ? <p className={styles.blockPrice}>{b.price}</p> : null}
                {b.cta ? <Button href={b.cta.href} variant="primary" size="md">{b.cta.label}</Button> : null}
              </div>
              <ArrowList items={b.items} />
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
