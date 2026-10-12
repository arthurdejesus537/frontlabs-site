import styles from "./Logo.module.css";

/**
 * Lockup Front Labs (DESIGN.md §2): símbolo |/ (uma barra reta e uma inclinada)
 * + "FrontLabs" em Bricolage Grotesque 800, opsz 96, −0.05em.
 * Símbolo com 0,78 da altura da fonte; espaço de 0,2 do tamanho da letra. Herda a cor (preto ou branco).
 */
export function Logo({ size = "var(--t-logo)", className, label = "FrontLabs" }: { size?: string; className?: string; label?: string }) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(" ")} style={{ fontSize: size }}>
      <svg className={styles.mark} viewBox="0 0 20 24" aria-hidden="true" focusable="false">
        <rect x="1" y="0" width="4.2" height="24" />
        <path d="M14.6 0h4.4L10.4 24H6z" />
      </svg>
      <span className={styles.name}>{label}</span>
    </span>
  );
}
