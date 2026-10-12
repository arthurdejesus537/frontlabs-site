import Link from "next/link";
import type { FooterContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

/** Footer (B card escuro raio 20 + A colunas): frase + contato, "versão curta" com pills de IA, colunas, marca grande, linha legal e redes. */
export function Footer({ data, logo }: { data: FooterContent; logo?: React.ReactNode }) {
  return (
    <footer className={styles.wrap} data-section="footer">
      <div className={styles.card}>
        <div className={styles.top}>
          <p className={styles.tagline}>{data.tagline}</p>
          <a href={data.contact.href} className={styles.contact}><Icon name="arrow" size={18} />{data.contact.label}</a>
        </div>
        {data.ask ? (
          <div className={styles.ask}>
            <div>
              <h2 className={styles.askTitle}>{data.ask.title}</h2>
              <p className={styles.askText}>{data.ask.text}</p>
            </div>
            <ul className={styles.pills}>
              {data.ask.items.map((a) => (
                <li key={a.label}><a href={a.href} className={styles.pill} target="_blank" rel="noopener noreferrer">{a.label}</a></li>
              ))}
            </ul>
          </div>
        ) : null}
        <nav className={styles.cols} aria-label={site.ui.navFooter}>
          {data.columns.map((c) => (
            <div key={c.title}>
              <h3 className={styles.colTitle}>{c.title}</h3>
              <ul className={styles.links}>
                {c.links.map((l) => <li key={l.label}>{l.href.startsWith("/") ? <Link href={l.href} className={styles.link}>{l.label}</Link> : <a href={l.href} className={styles.link}>{l.label}</a>}</li>)}
              </ul>
            </div>
          ))}
        </nav>
        <div className={styles.bottom}>
          <p className={styles.brand}>{logo ?? data.brand}</p>
          <div className={styles.legal}>
            <span>{data.legal}</span>
            {data.legalLinks.map((l) => <a key={l.label} href={l.href} className={styles.legalLink}>{l.label}</a>)}
          </div>
          <ul className={styles.social}>
            {data.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={styles.socialLink} aria-label={s.label}><Icon name={s.icon} size={18} /></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
