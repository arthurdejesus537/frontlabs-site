import { site } from "@/content/site";
import styles from "./Statement.module.css";

/**
 * Problema (B): uma frase grande que nomeia a dor + frase pequena embaixo.
 * shout = grito cinza (B); calm = frase de 30–34px em duas cores (ink + soft).
 */
export function Statement() {
  const data = site.statement;
  if (!data.enabled) return null;
  const shout = data.style === "shout";
  return (
    <section id={data.id} data-section="statement" className={`section ${styles.wrap}`}>
      <div className="container">
        <h2 className={shout ? `t-shout ${styles.shout}` : styles.calm}>
          {data.lines.map((l, i) => (
            <span key={i} className={styles.line}>{l} </span>
          ))}
          {data.soft ? <span className={styles.soft}>{data.soft}</span> : null}
        </h2>
        {data.note ? <p className={styles.note}>{data.note}</p> : null}
      </div>
    </section>
  );
}
