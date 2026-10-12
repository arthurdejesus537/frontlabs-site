"use client";
import { useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import styles from "./Audience.module.css";

/** Para quem (B): etiqueta + título calmo à esquerda; cards empilhados à direita (um aberto por vez, o aberto ganha cor). */
export function Audience() {
  const data = site.audience;
  const [open, setOpen] = useState(0);
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="audience" className="section" aria-labelledby={`${data.id}-title`}>
      <div className={`container ${styles.grid}`}>
        <header className={styles.head}>
          <span className={styles.tag}>{data.tag}</span>
          <h2 id={`${data.id}-title`} className="t-heading">{data.title}</h2>
          {data.text ? <p className={styles.text}>{data.text}</p> : null}
        </header>
        <ul className={styles.stack}>
          {data.items.map((it, i) => {
            const on = i === open;
            return (
              <li key={it.name} className={[styles.card, on ? styles.on : ""].join(" ")}>
                <span className={styles.dots} aria-hidden="true"><i /><i /><i /><i /></span>
                <h3 className={styles.cardHead}>
                  <button type="button" className={styles.toggle} aria-expanded={on} aria-controls={`${data.id}-p-${i}`} onClick={() => setOpen(i)}>
                    <span className={styles.name}>{it.name}</span>
                    <span className={styles.short}>{it.short}</span>
                  </button>
                </h3>
                <div id={`${data.id}-p-${i}`} className={styles.body} hidden={!on}>
                  <ul className={styles.points}>
                    {it.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  {it.primary || it.secondary ? (
                    <div className={styles.ctas}>
                      {it.primary ? <Button href={it.primary.href} variant="primary" size="lg">{it.primary.label}</Button> : null}
                      {it.secondary ? <Button href={it.secondary.href} variant="link">{it.secondary.label}</Button> : null}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
