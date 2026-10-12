"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./Library.module.css";

/** Biblioteca (B): campo colorido, título à esquerda, texto + setas à direita, carrossel de cards com scroll-snap (toque e setas). */
export function Library() {
  const data = site.library;
  const ref = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="library" className="field-wrap" aria-labelledby={`${data.id}-title`}>
      <div className={styles.field} style={{ background: `var(--c-field-${data.field})` }}>
        <div className={`container ${styles.head}`}>
          <h2 id={`${data.id}-title`} className="t-display">{data.title}</h2>
          <div className={styles.side}>
            <p className={styles.text}>{data.text}</p>
            <div className={styles.arrows}>
              <button type="button" className={styles.prev} onClick={() => go(-1)} disabled={edge.start} aria-label={data.prevLabel} aria-controls={`${data.id}-list`}>
                <Icon name="chevron-left" size={14} />
              </button>
              <button type="button" className={styles.next} onClick={() => go(1)} disabled={edge.end} aria-label={data.nextLabel} aria-controls={`${data.id}-list`}>
                <Icon name="chevron" size={14} />
              </button>
            </div>
          </div>
        </div>
        <ul ref={ref} id={`${data.id}-list`} className={styles.track} tabIndex={0} aria-label={data.title}>
          {data.items.map((it, i) => (
            <li key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.brand}>{it.brand}</span>
                <h3 className={styles.title}>{it.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.author}><span className={styles.avatar} aria-hidden="true" />{it.author}</p>
                <p className={`t-small ${styles.desc}`}>{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
