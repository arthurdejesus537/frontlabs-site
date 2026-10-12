import type { PageHeroContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import styles from "./PageHero.module.css";

/** Topo das páginas (Ploy /pricing): etiqueta pill + título enorme centralizado + frase + 2 botões. */
export function PageHero({ data, as: Tag = "h1" }: { data: PageHeroContent; as?: "h1" | "h2" }) {
  return (
    <section data-section="page-hero" className={styles.hero} aria-labelledby="page-title">
      <div className="container">
        <p className={styles.tag}>{data.tag}</p>
        <Tag id="page-title" className={styles.title}>
          {data.title}
          {" "}
          {data.titleTurn ? <span className={styles.turn}>{data.titleTurn}</span> : null}
        </Tag>
        <p className={styles.lead}>{data.lead}</p>
        <div className={styles.ctas}>
          <Button href={data.primary.href} variant="primary" size="lg">{data.primary.label}</Button>
          {data.secondary ? <Button href={data.secondary.href} variant="secondary" size="lg">{data.secondary.label}</Button> : null}
        </div>
      </div>
    </section>
  );
}
