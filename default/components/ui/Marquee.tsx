"use client";
import { useState, type ReactNode } from "react";
import { site } from "@/content/site";
import { Icon } from "./Icon";
import styles from "./Marquee.module.css";

/**
 * Faixa que rola sozinha (A+B). O conteúdo é duplicado; a cópia fica escondida do leitor de tela.
 * Para no hover/foco, tem botão de pausa (WCAG 2.2.2) e vira grade estática com reduced-motion.
 */
export function Marquee({ children, label }: { children: ReactNode; label: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className={[styles.marquee, paused ? styles.paused : ""].join(" ")} aria-label={label} role="region">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <div className={styles.group}>{children}</div>
          <div className={styles.group} aria-hidden="true">{children}</div>
        </div>
      </div>
      <button type="button" className={styles.pause} onClick={() => setPaused((p) => !p)} aria-pressed={paused} aria-label={paused ? site.ui.playMarquee : site.ui.pauseMarquee}>
        <Icon name={paused ? "play" : "pause"} size={12} />
      </button>
    </div>
  );
}
