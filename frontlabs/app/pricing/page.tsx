import type { Metadata } from "next";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PlanCard } from "@/components/ui/PlanCard";
import { PageHero } from "@/components/sections/PageHero";
import { PaymentBlock } from "@/components/sections/PaymentBlock";
import { CompareTable } from "@/components/sections/CompareTable";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import styles from "../pages.module.css";

const page = site.pages.pricing;
export const metadata: Metadata = { title: page.meta.title, description: page.meta.description };

/** /pricing — clone de estrutura da página de preço da Ploy. */
export default function Pricing() {
  return (
    <main id="conteudo">
      <PageHero data={page.hero} />
      <section data-section="plans" className={styles.plans} aria-label={page.hero.tag}>
        <h2 className="sr-only">{page.compare.columns.join(", ")}</h2>
        <ul className={`container ${styles.planGrid}`}>
          {page.plans.map((p) => <li key={p.name}><PlanCard plan={p} /></li>)}
        </ul>
        <p className={`container ${styles.planNote}`}>
          {page.plansNote.text}{" "}
          <Button href={page.plansNote.link.href} variant="link">{page.plansNote.link.label}</Button>
        </p>
      </section>
      <PaymentBlock data={page.payment} />
      <CompareTable data={page.compare} />
      <Faq data={page.faq} />
      <FinalCta />
    </main>
  );
}
