import { site } from "@/content/site";
import styles from "./MediaPlaceholder.module.css";

/** Bloco cinza no formato certo com rótulo mono: diz que mídia entra aqui. */
export function MediaPlaceholder({ label, ratio, tone = "light", fill, className }: { label?: string; ratio?: string; tone?: "light" | "dark"; fill?: boolean; className?: string }) {
  return (
    <div
      className={[styles.ph, styles[tone], fill ? styles.fill : "", className].filter(Boolean).join(" ")}
      style={!fill && ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label ? `${site.ui.mediaSpace}: ${label}` : site.ui.mediaSpace}
      data-media
    >
      {label ? <span className={`t-label ${styles.text}`}>{label}</span> : null}
    </div>
  );
}
