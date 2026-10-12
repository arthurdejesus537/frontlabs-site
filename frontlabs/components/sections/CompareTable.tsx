import type { CompareContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import styles from "./CompareTable.module.css";

/** "Every plan, side by side." (Ploy /pricing): etiqueta, título, frase e tabela com ✓ / – e uma coluna destacada. */
export function CompareTable({ data, id = "compare" }: { data: CompareContent; id?: string }) {
  return (
    <section id={id} data-section="compare" className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className={styles.head}>
          {data.tag ? <p className={styles.tag}>{data.tag}</p> : null}
          <h2 id={`${id}-title`} className="t-display">{data.title}</h2>
          {data.text ? <p className={styles.text}>{data.text}</p> : null}
        </header>
        <div className={styles.scroll} tabIndex={0} role="region" aria-labelledby={`${id}-title`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.feature}><span className="t-label">/feature</span></th>
                {data.columns.map((c, i) => (
                  <th key={c} scope="col" className={i === data.highlight ? styles.hl : undefined}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className={styles.feature}>{r.label}</th>
                  {r.values.map((v, i) => (
                    <td key={i} className={i === data.highlight ? styles.hl : undefined}>
                      {v === true ? (
                        <span className={styles.yes}><Icon name="check" size={14} /><span className="sr-only">{data.yes}</span></span>
                      ) : v === false ? (
                        <span className={styles.no}><span aria-hidden="true">–</span><span className="sr-only">{data.no}</span></span>
                      ) : (
                        <span className={styles.value}>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
