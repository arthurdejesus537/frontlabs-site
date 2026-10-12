import type { OfferItem } from "@/content/types";
import { Button } from "./Button";
import { Icon } from "./Icon";
import styles from "./PlanCard.module.css";

/**
 * Card de plano (Ploy /pricing): nome + selo, frase, preço grande com nota e parcelas,
 * botão, e a lista do que inclui. O destacado ganha contorno preto.
 * Usado no resumo de preço da home e na página /pricing.
 */
export function PlanCard({ plan, className }: { plan: OfferItem; className?: string }) {
  return (
    <article className={[styles.card, plan.featured ? styles.featured : "", className].filter(Boolean).join(" ")} aria-labelledby={`plan-${slug(plan.name)}`}>
      <div className={styles.nameRow}>
        <h3 id={`plan-${slug(plan.name)}`} className={styles.name}>{plan.name}</h3>
        {plan.badge ? <span className={styles.badge}>{plan.badge}</span> : null}
      </div>
      <p className={styles.phrase}>{plan.phrase}</p>
      {plan.price ? (
        <div className={styles.price}>
          <p className={styles.priceValue}>{plan.price}</p>
          <p className={styles.priceNote}>
            {plan.priceNote}
            {plan.split ? <span className={styles.split}>{plan.split}</span> : null}
          </p>
        </div>
      ) : null}
      <div className={styles.ctas}>
        {plan.ctas.map((c) => (
          <Button key={c.label} href={c.href} variant={c.variant ?? "secondary"} size="lg">{c.label}</Button>
        ))}
      </div>
      {plan.text ? <p className={`t-small ${styles.text}`}>{plan.text}</p> : null}
      {plan.features?.length ? (
        <ul className={styles.features}>
          {plan.features.map((f) => (
            <li key={f}><Icon name="check" size={14} className={styles.check} />{f}</li>
          ))}
        </ul>
      ) : null}
      {plan.meta ? <p className={`t-meta ${styles.meta}`}>{plan.meta}</p> : null}
    </article>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
