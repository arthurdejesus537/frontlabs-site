import type { ReactNode } from "react";
import styles from "./Label.module.css";

/** Rótulo mono em caixa-alta (B: "ANNOUNCEMENT"). `pill` vira etiqueta escura. */
export function Label({ children, pill, tone, className }: { children: ReactNode; pill?: boolean; tone?: "ink" | "mute" | "light"; className?: string }) {
  const cls = ["t-label", styles.label, pill ? styles.pill : "", tone ? styles[tone] : "", className].filter(Boolean).join(" ");
  return <span className={cls}>{children}</span>;
}
