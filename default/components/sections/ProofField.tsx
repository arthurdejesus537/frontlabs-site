import { site } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkline } from "@/components/ui/Sparkline";
import styles from "./ProofField.module.css";

/** Prova (B): campo colorido raio 20 — título à esquerda, texto à direita, 3 cards de número com gráfico, nota, mini-stats e status ao vivo. */
export function ProofField() {
  const data = site.proof;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="proof" className="field-wrap" aria-labelledby={`${data.id}-title`}>
      <div className={styles.field} style={{ background: `var(--c-field-${data.field})` }}>
        <div className="container">
          <header className={styles.head}>
            <h2 id={`${data.id}-title`} className="t-display">{data.title}</h2>
            <p className={styles.text}>{data.text}</p>
          </header>
          <ul className={styles.cards}>
            {data.cards.map((c, i) => (
              <Reveal as="li" key={i} delay={i * 120} className={styles.card}>
                <span className={styles.tag}>{c.tag}</span>
                <div className={styles.numRow}>
                  <div>
                    <CountUp value={c.value} prefix={c.prefix} suffix={c.suffix} className="t-number" />
                    <p className={styles.caption}>{c.caption}</p>
                  </div>
                  <Sparkline values={c.spark} className={styles.spark} />
                </div>
                <p className={styles.note}>{c.note}</p>
                <dl className={styles.stats}>
                  {c.stats.map((s, j) => (
                    <div key={j}>
                      <dt>{s.label}</dt>
                      <dd>{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.status}><span className={styles.dot} aria-hidden="true" />{c.status}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
