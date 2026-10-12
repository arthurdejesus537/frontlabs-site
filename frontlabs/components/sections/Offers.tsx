import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { PlanCard } from "@/components/ui/PlanCard";
import styles from "./Offers.module.css";

/**
 * Ofertas (A): título centralizado em 2 linhas + 3 colunas iguais
 * (nome, mídia 16:9, frase, texto, botões pequenos, meta).
 * mode "pricing": cards brancos com preço e lista (para a página de preço de uma marca).
 */
export function Offers() {
  const data = site.offers;
  if (!data.enabled) return null;
  const pricing = data.mode === "pricing";
  return (
    <section id={data.id} data-section="offers" className={`section ${styles.section}`} aria-labelledby={`${data.id}-title`}>
      <header className={`container ${styles.head}`}>
        {data.label ? <p className="t-label">{data.label}</p> : null}
        <h2 id={`${data.id}-title`} className="t-display">{data.title}</h2>
        {data.lead ? <p className={`t-lead ${styles.lead}`}>{data.lead}</p> : null}
      </header>
      <ul className={[pricing ? "container" : "wide", styles.grid, pricing ? styles.pricing : "", styles[`n${data.items.length}`]].join(" ")}>
        {data.items.map((o) => pricing ? (
          <li key={o.name} className={styles.planItem}><PlanCard plan={o} /></li>
        ) : (
          <li key={o.name} className={[styles.item, o.featured ? styles.featured : ""].join(" ")}>
            <div className={styles.nameRow}>
              <h3 className={styles.name}>{o.name}</h3>
              {o.badge ? <span className={styles.badge}>{o.badge}</span> : null}
            </div>
            {o.media ? <Media media={o.media} className={styles.media} sizes="(max-width: 767px) 100vw, 33vw" /> : null}
            {o.price ? (
              <p className={styles.price}>
                <span className={styles.priceValue}>{o.price}</span>
                {o.priceNote ? <span className={styles.priceNote}>{o.priceNote}</span> : null}
              </p>
            ) : null}
            <p className={styles.phrase}>{o.phrase}</p>
            <p className={`t-small ${styles.text}`}>{o.text}</p>
            {o.features?.length ? (
              <ul className={styles.features}>
                {o.features.map((f) => (
                  <li key={f}><Icon name="check" size={14} className={styles.check} />{f}</li>
                ))}
              </ul>
            ) : null}
            <div className={styles.foot}>
              <div className={styles.ctas}>
                {o.ctas.map((c) => (
                  <Button key={c.label} href={c.href} variant={c.variant ?? "secondary"} size={pricing ? "lg" : "sm"}>{c.label}</Button>
                ))}
              </div>
              {o.meta ? <p className={`t-meta ${styles.meta}`}>{o.meta}</p> : null}
            </div>
          </li>
        ))}
      </ul>
      {data.footnote || data.more ? (
        <div className={`container ${styles.footnote}`}>
          {data.footnote ? <p className="t-meta">{data.footnote}</p> : null}
          {data.more ? <Button href={data.more.href} variant="outline" size="md" icon={<Icon name="arrow" />}>{data.more.label}</Button> : null}
        </div>
      ) : null}
    </section>
  );
}
