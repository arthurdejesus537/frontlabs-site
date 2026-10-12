"use client";
import { useEffect, useRef, useState } from "react";
import type { LiveCard, LiveCardsContent } from "@/content/types";
import { Media } from "@/components/ui/Media";
import { Odometer } from "@/components/ui/Odometer";
import { Sparkline } from "@/components/ui/Sparkline";
import { site } from "@/content/site";
import styles from "./LiveCards.module.css";

/**
 * Três cards "ao vivo" (Ploy Web / Grow / Ads) sobre o Horizonte com grão.
 * Cada card: marca + pill, número em odômetro + sparkline, rótulo, linha de log que troca
 * a cada `intervalMs` com fade, três mini-stats e status com ponto pulsando.
 * O componente só recebe `cards`: não sabe se os dados são de exemplo ou reais.
 */
export function LiveCards({ data }: { data: LiveCardsContent }) {
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="live-cards" className="field-wrap" aria-labelledby={`${data.id}-title`}>
      <div className={styles.field} data-field>
        <Media media={{ kind: "gradient", src: "/img/gradiente-horizonte-16x9.jpg" }} fill className={styles.bg} />
        <div className={styles.inner}>
          <header className={styles.head}>
            <div className={styles.headLeft}>
              {data.illustrative ? <p className={`t-label ${styles.label}`}>{data.label ?? site.ui.example}</p> : null}
              <h2 id={`${data.id}-title`} className={`t-display ${styles.title}`}>{data.title}</h2>
            </div>
            <p className={styles.text}>{data.text}</p>
          </header>
          <ul className={styles.cards}>
            {data.cards.map((c) => <Card key={c.pill} card={c} brand={data.brand} intervalMs={data.intervalMs} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({ card, brand, intervalMs }: { card: LiveCard; brand: string; intervalMs: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [on, setOn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [log, setLog] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      setVisible(e.isIntersecting);
      if (e.isIntersecting) setOn(true);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || card.log.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setLog((n) => (n + 1) % card.log.length), intervalMs);
    return () => window.clearInterval(id);
  }, [visible, card.log.length, intervalMs]);

  return (
    <li ref={ref} className={styles.card} {...(on ? { "data-on": "" } : {})}>
      <div className={styles.top}>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.pill}>{card.pill}</span>
      </div>
      <div className={styles.numRow}>
        <div className={styles.num}>
          <Odometer value={card.value} prefix={card.prefix} suffix={card.suffix} className={styles.big} />
          <p className={styles.caption}>{card.caption}</p>
        </div>
        <Sparkline values={card.spark} className={styles.spark} />
      </div>
      <p className={styles.log}>
        <span key={log} className={styles.logText}>{card.log[log]}</span>
      </p>
      <dl className={styles.stats}>
        {card.stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd><Odometer value={s.value} suffix={s.suffix} /></dd>
          </div>
        ))}
      </dl>
      <p className={styles.status}><span className={styles.dot} aria-hidden="true" />{card.status}</p>
    </li>
  );
}
