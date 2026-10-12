import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import styles from "./Spotlight.module.css";

/** Destaque (A, bloco Research): moldura com fundo borrado; rótulo + parágrafo grande à esquerda, lista de 3 itens com linha e seta à direita. */
export function Spotlight() {
  const data = site.spotlight;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="spotlight" className={`section ${styles.wrap}`} aria-labelledby={`${data.id}-title`}>
      <div className={styles.frame}>
        <Media media={data.media} fill className={styles.bg} />
        <div className={styles.left}>
          <h2 id={`${data.id}-title`} className={styles.label}>{data.label}</h2>
          <p className={styles.text}>{data.text}</p>
          {data.cta ? <Button href={data.cta.href} variant="outline-light" size="sm">{data.cta.label}</Button> : null}
        </div>
        <ul className={styles.list}>
          {data.items.map((it) => (
            <li key={it.title}>
              <a href={it.href} className={styles.item}>
                <span className={styles.itemTitle}>{it.title}</span>
                <span className={styles.itemText}>{it.text}</span>
                <Icon name="arrow-up-right" size={14} className={styles.arrow} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
