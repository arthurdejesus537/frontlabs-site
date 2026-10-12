import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import styles from "./News.module.css";

/** Notícias (A): título à esquerda; grade 2×2 com imagem à esquerda e título, texto e "saiba mais ›" à direita. */
export function News() {
  const data = site.news;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="news" className="section" aria-labelledby={`${data.id}-title`}>
      <div className="wide">
        <h2 id={`${data.id}-title`} className={`t-display ${styles.title}`}>{data.title}</h2>
        <ul className={styles.grid}>
          {data.items.map((n) => (
            <li key={n.title}>
              <a href={n.href} className={styles.item}>
                <Media media={n.media} className={styles.media} sizes="(max-width: 767px) 100vw, 25vw" />
                <span className={styles.body}>
                  <span className={styles.itemTitle}>{n.title}</span>
                  <span className={`t-small ${styles.text}`}>{n.text}</span>
                  <span className={styles.more}>{data.more}<Icon name="chevron" size={14} /></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
