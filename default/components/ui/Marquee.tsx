import type { ReactNode } from "react";
import styles from "./Marquee.module.css";

/** Faixa que rola sozinha (A+B). O conteúdo é duplicado; a cópia fica escondida do leitor de tela. Para com reduced-motion. */
export function Marquee({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className={styles.marquee} aria-label={label} role="region">
      <div className={styles.track}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
