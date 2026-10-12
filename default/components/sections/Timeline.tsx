import { site } from "@/content/site";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Timeline.module.css";

/**
 * Atividade (B, "An employee… that never sleeps"): campo colorido com o começo do título
 * em cima à esquerda, a coluna de cards com horário no meio e o fim do título embaixo à direita.
 * `field: "image"` usa uma imagem/gradiente de fundo no lugar da cor.
 */
export function Timeline() {
  const data = site.timeline;
  if (!data.enabled) return null;
  const image = data.field === "image";
  return (
    <section id={data.id} data-section="timeline" className="field-wrap" aria-labelledby={`${data.id}-title`}>
      <div className={[styles.field, image ? styles.onImage : ""].join(" ")} style={image ? undefined : { background: `var(--c-field-${data.field})` }}>
        {image && data.background ? <Media media={data.background} fill className={styles.bg} /> : null}
        <div className={`container ${styles.inner}`}>
          {data.label ? <p className={`t-label ${styles.label}`}>{data.label}</p> : null}
          <h2 id={`${data.id}-title`} className={styles.titleWrap}>
            <span className={`t-display ${styles.start}`}>{data.titleStart}</span>
            <span className="sr-only"> </span>
            <span className={`t-display ${styles.end}`}>{data.titleEnd}</span>
          </h2>
          <ol className={styles.list}>
            {data.items.map((it, i) => (
              <Reveal as="li" key={i} delay={i * 140} className={styles.card}>
                <div className={styles.top}>
                  <time className={styles.time}>{it.time}</time>
                  <span className={styles.tag} style={{ background: `var(--c-tag-${it.tone})` }}>{it.tag}</span>
                </div>
                <p className={styles.title}>{it.title}</p>
                <p className={`t-small ${styles.text}`}>{it.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
