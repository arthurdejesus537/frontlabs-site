import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./Pillars.module.css";

/**
 * Pilares (B, Ploy Monitor/Act/Surface): card branco com N colunas separadas por linha —
 * círculo de ícone, número mono opcional, título e frase. Título da seção (com virada) acima, à esquerda.
 */
export function Pillars() {
  const data = site.pillars;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="pillars" className={`section ${styles.section}`} aria-labelledby={data.title ? `${data.id}-title` : undefined}>
      <div className="container">
        {data.title ? (
          <header className={styles.head}>
            {data.label ? <p className="t-label">{data.label}</p> : null}
            <h2 id={`${data.id}-title`} className="t-display">
              {data.title}
              {" "}
              {data.titleTurn ? <span className={styles.turn}>{data.titleTurn}</span> : null}
            </h2>
          </header>
        ) : null}
        <ul className={styles.card} style={{ "--cols": data.items.length } as React.CSSProperties}>
          {data.items.map((p, i) => (
            <li key={p.title} className={styles.item}>
              <div className={styles.top}>
                <span className={styles.icon}><Icon name={p.icon} size={18} /></span>
                {data.numbered ? <span className={`t-label ${styles.num}`}>/{String(i + 1).padStart(2, "0")}</span> : null}
              </div>
              <h3 className={`t-title ${styles.title}`}>{p.title}</h3>
              <p className={`t-small ${styles.text}`}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
