"use client";
import { useState } from "react";
import { site } from "@/content/site";
import type { FaqContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./Faq.module.css";

/**
 * Perguntas (DESIGN §6.9) — só da Front Labs.
 * Esquerda: título, linha de apoio e o card do Arch. Direita: perguntas num card branco raio 24,
 * número mono + círculo "+" que gira e vira "×" preto; resposta começa com a pílula de veredito.
 */
export function Faq({ data = site.faq }: { data?: FaqContent }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!data.enabled) return null;
  const c = data.contact;
  return (
    <section id={data.id} data-section="faq" className="section" aria-labelledby={`${data.id}-title`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          {data.label ? <p className="t-label">{data.label}</p> : null}
          <h2 id={`${data.id}-title`} className="t-display">{data.title}</h2>
          <p className={styles.text}>{data.text}</p>
          {c ? (
          <div className={styles.arch}>
            <div className={styles.archTop}>
              <span className={styles.avatar} aria-hidden="true">{c.initial}</span>
              <p className={styles.bubble}><span className="sr-only">{c.name}: </span>{c.bubble}</p>
            </div>
            <p className={styles.email}>
              <span className={styles.emailText}>{c.email}</span>
              {c.emailNote ? <span className={`t-label ${styles.note}`}>{c.emailNote}</span> : null}
            </p>
            <Button href={`mailto:${c.email}`} variant="primary" size="md">{c.button}</Button>
          </div>
          ) : null}
        </div>
        <div className={styles.right}>
        <ol className={styles.list}>
          {data.items.map((it, i) => {
            const on = open === i;
            return (
              <li key={it.q} className={styles.item}>
                <h3 className={styles.qWrap}>
                  <button type="button" className={styles.q} aria-expanded={on} aria-controls={`${data.id}-a-${i}`} onClick={() => setOpen(on ? null : i)}>
                    <span className={`t-label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.qText}>{it.q}</span>
                    <span className={[styles.plus, on ? styles.plusOn : ""].join(" ")} aria-hidden="true"><Icon name="plus" size={16} /></span>
                  </button>
                </h3>
                <div id={`${data.id}-a-${i}`} className={styles.a} hidden={!on}>
                  <p><span className={styles.verdict}>{it.verdict}</span> {it.a}</p>
                </div>
              </li>
            );
          })}
        </ol>
        {data.more ? <Button href={data.more.href} variant="outline" size="md" icon={<Icon name="arrow" />} className={styles.more}>{data.more.label}</Button> : null}
        </div>
      </div>
    </section>
  );
}
