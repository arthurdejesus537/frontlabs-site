import Image from "next/image";
import { site } from "@/content/site";
import type { StepVisual } from "@/content/types";
import { PreviewCard } from "@/components/ui/PreviewCard";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Steps.module.css";

/**
 * Passos (DESIGN §6.8) — só da Front Labs.
 * Card branco raio 24 com a imagem do momento em cima (raio 18, 8px de margem)
 * e embaixo: círculo de etapa + rótulo mono, título de card e uma frase. O último círculo é preenchido.
 */
function Visual({ v }: { v: StepVisual }) {
  if (v.kind === "preview") {
    return (
      <div className={styles.stage} data-stage>
        <Image src="/img/foto-borrada-hero.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className={styles.bg} />
        <div className={styles.mini}>
          <PreviewCard preview={{ ...v.preview, rows: v.preview.rows?.slice(0, 2) }} compact />
        </div>
      </div>
    );
  }
  if (v.kind === "invite") {
    return (
      <div className={styles.stage} data-stage>
        <Image src="/img/foto-borrada-hero.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className={styles.bg} />
        <div className={styles.invite}>
          <div className={styles.inviteCard}>
            <span className={styles.date}><span>{v.month}</span><strong>{v.day}</strong></span>
            <span className={styles.inviteText}>
              <span className={styles.inviteTitle}>{v.title}</span>
              <span className={`t-label ${styles.inviteMeta}`}>{v.meta}</span>
            </span>
          </div>
          <p className={styles.bubble}>{v.reply}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.stage} ${styles.horizon}`} data-stage>
      <Image src="/img/gradiente-horizonte-4x5.jpg" alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className={styles.bg} />
      <div className={styles.live}>
        <span className={styles.domain}><i className={styles.dot} aria-hidden="true" />{v.domain}</span>
        <span className={styles.word}>{v.word}</span>
      </div>
    </div>
  );
}

export function Steps() {
  const data = site.steps;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="steps" className="section" aria-labelledby={`${data.id}-title`}>
      <div className="container">
        <header className={styles.head}>
          {data.label ? <p className="t-label">{data.label}</p> : null}
          <h2 id={`${data.id}-title`} className="t-display">
            {data.title}
            {data.titleTurn ? <span className={styles.turn}>{data.titleTurn}</span> : null}
          </h2>
        </header>
        <ol className={styles.grid}>
          {data.items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className={styles.card}>
              <Visual v={s.visual} />
              <div className={styles.body}>
                <p className={styles.meta}>
                  <span className={[styles.circle, i === data.items.length - 1 ? styles.filled : ""].join(" ")} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-label">{s.label}</span>
                </p>
                <h3 className="t-title">
                  <span className="sr-only">{`Step ${i + 1}: `}</span>
                  {s.title}
                </h3>
                <p className={styles.text}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
