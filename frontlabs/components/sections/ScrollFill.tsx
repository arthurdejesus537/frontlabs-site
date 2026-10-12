"use client";
import { useEffect, useRef } from "react";
import type { ScrollFillContent } from "@/content/types";
import styles from "./ScrollFill.module.css";

/**
 * Linha que preenche ao rolar (Ploy, medido em docs/referencias/rodada2/ploy-scrollfill.md).
 * O título vira palavras; cada uma recebe --progress (0–100%) em sequência. O progresso total vai de 0
 * (topo do título a 80% da janela) a 1 (base do título no meio da janela).
 * Genérico: o texto vem do content. Reduced-motion e sem JS: tudo cheio (CSS).
 */
export function ScrollFill({ data }: { data: ScrollFillContent }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h = ref.current;
    if (!h || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = [...h.querySelectorAll<HTMLElement>("[data-word]")];
    let raf = 0;
    const paint = () => {
      raf = 0;
      const r = h.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (vh * 0.3 + r.height)));
      const n = words.length;
      words.forEach((w, i) => {
        const wp = Math.min(1, Math.max(0, p * n - i));
        w.style.setProperty("--progress", `${(wp * 100).toFixed(1)}%`);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!data.enabled) return null;
  const words = data.text.split(/\s+/);
  return (
    <section id={data.id} data-section="scroll-fill" className={`section ${styles.section}`}>
      <div className="container">
        <h2 ref={ref} className={styles.title} aria-label={data.text}>
          {words.map((w, i) => (
            <span key={i}>
              <span data-word className={styles.word} aria-hidden="true">{w}</span>
              {i < words.length - 1 ? " " : null}
            </span>
          ))}
        </h2>
        {data.note ? <p className={styles.note}>{data.note}</p> : null}
      </div>
    </section>
  );
}
