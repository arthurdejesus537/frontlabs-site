import { Button } from "@/components/ui/Button";
import styles from "./specimen.module.css";

/* Página de conferência do sistema: escala, cores, botões e raios. Não entra na navegação. */
const colors = [
  "bg", "surface", "ink", "text", "mute", "soft", "line", "btn", "btn-2", "dark", "bar",
  "field-1", "field-2", "field-3", "live", "placeholder",
];
const radii = ["frame", "field", "panel", "card", "card-sm", "media", "pill"];
const variants = ["primary", "secondary", "outline", "light", "link"] as const;
const sizes = ["lg", "md", "sm"] as const;

export const metadata = { title: "Specimen", robots: { index: false, follow: false } };

export default function Specimen() {
  return (
    <main className={`container ${styles.page}`}>
      <p className="t-label">/specimen · tokens do default</p>

      <section className={styles.block}>
        <p className="t-label">Tipografia</p>
        <p className="t-shout">Grito só aqui</p>
        <h1 className="t-hero">Hero calmo, uma frase que promete</h1>
        <h2 className="t-display">Título de seção em duas linhas no máximo, calmo como a Runway</h2>
        <h3 className="t-heading">Título calmo de bloco (Ploy)</h3>
        <h4 className="t-title">Título de card em 24px</h4>
        <p className="t-subtitle">Subtítulo de card 20/600</p>
        <p className="t-lead">Lead de 20px. Explica a promessa em uma ou duas frases, sem jargão, com o resultado para o cliente.</p>
        <p className="t-body">Corpo de 16px. Texto de apoio em parágrafos curtos, com tracking levemente negativo como na Ploy.</p>
        <p className="t-small">Texto pequeno de 14px para cards e listas.</p>
        <p className="t-meta">Meta de 12px · usado por 1.000+ clientes</p>
        <p className="t-number">385</p>
      </section>

      <section className={styles.block}>
        <p className="t-label">Cores</p>
        <div className={styles.swatches}>
          {colors.map((c) => (
            <div key={c} className={styles.swatch}>
              <span className={styles.chip} style={{ background: `var(--c-${c})` }} />
              <span className="t-meta">--c-{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <p className="t-label">Botões</p>
        {sizes.map((s) => (
          <div key={s} className={styles.row}>
            {variants.map((v) => (
              <Button key={v} variant={v} size={s} href="#">{`${v} ${s}`}</Button>
            ))}
          </div>
        ))}
        <div className={`${styles.row} ${styles.dark}`}>
          <Button variant="light" size="md" href="#">light md</Button>
          <Button variant="outline-light" size="md" href="#">outline-light md</Button>
        </div>
      </section>

      <section className={styles.block}>
        <p className="t-label">Raios</p>
        <div className={styles.swatches}>
          {radii.map((r) => (
            <div key={r} className={styles.swatch}>
              <span className={styles.radius} style={{ borderRadius: `var(--r-${r})` }} />
              <span className="t-meta">--r-{r}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
