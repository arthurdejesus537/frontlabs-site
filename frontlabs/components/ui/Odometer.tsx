import type { CSSProperties } from "react";
import styles from "./Odometer.module.css";

/**
 * Número em odômetro (Ploy): cada dígito é uma coluna 0–9 que rola até o valor.
 * A rolagem acontece quando um ancestral ganha `data-on` (o card entrou na tela).
 * Sem JS ou com reduced-motion o valor final aparece parado.
 */
export function Odometer({ value, prefix = "", suffix = "", className }: { value: number; prefix?: string; suffix?: string; className?: string }) {
  const chars = String(value).split("");
  return (
    <span className={[styles.odo, className].filter(Boolean).join(" ")} role="img" aria-label={`${prefix}${value}${suffix}`}>
      {prefix ? <span aria-hidden="true">{prefix}</span> : null}
      {chars.map((c, i) => (
        <span key={i} className={styles.slot} aria-hidden="true">
          <span className={styles.col} style={{ "--d": c, "--i": i } as CSSProperties}>
            {"0123456789".split("").map((d) => <span key={d}>{d}</span>)}
          </span>
        </span>
      ))}
      {suffix ? <span aria-hidden="true">{suffix}</span> : null}
    </span>
  );
}
