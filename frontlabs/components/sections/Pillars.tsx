import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./Pillars.module.css";

/** Pilares (B): card branco com 3 colunas separadas por linha — ícone, título, texto. */
export function Pillars() {
  const data = site.pillars;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="pillars" className={`section ${styles.section}`}>
      <div className="container">
        {data.title ? (
          <header className={styles.head}>
            {data.label ? <p className="t-label">{data.label}</p> : null}
            <h2 className="t-display">{data.title}</h2>
          </header>
        ) : null}
        <ul className={styles.card}>
          {data.items.map((p) => (
            <li key={p.title} className={styles.item}>
              <span className={styles.icon}><Icon name={p.icon} size={16} /></span>
              <h3 className={`t-subtitle ${styles.title}`}>{p.title}</h3>
              <p className={`t-small ${styles.text}`}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
