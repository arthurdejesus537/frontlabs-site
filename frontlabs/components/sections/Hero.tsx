import type { HeroContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { PreviewCard } from "@/components/ui/PreviewCard";
import styles from "./Hero.module.css";

/**
 * Hero (A + B): moldura de raio --r-frame afastada --gutter da borda.
 * calm  = copy embaixo à esquerda (A), título calmo.
 * shout = copy centralizada com o grito (B).
 * Os dois têm 2 CTAs e o card de anúncio (B). Se houver `preview`, ele aparece à direita.
 */
export function Hero({ data }: { data: HeroContent }) {
  if (!data.enabled) return null;
  const shout = data.variant === "shout";
  return (
    <section id={data.id} data-section="hero" className={styles.wrap} aria-labelledby="hero-title">
      <div className={[styles.frame, shout ? styles.shout : styles.calm, data.preview ? styles.withPreview : ""].join(" ")}>
        <Media media={data.media} fill priority className={styles.media} />
        <div className={styles.scrim} aria-hidden="true" />
        <div className={styles.copy}>
          {data.label ? <p className={`t-label ${styles.label}`}>{data.label}</p> : null}
          <h1 id="hero-title" className={shout ? `t-shout ${styles.title}` : `t-hero ${styles.title}`}>
            {data.title}
            {data.titleTurn ? <span className={styles.turn}>{data.titleTurn}</span> : null}
          </h1>
          <p className={`t-lead ${styles.lead}`}>{data.lead}</p>
          <div className={styles.ctas}>
            <Button href={data.primary.href} variant="light" size="lg">{data.primary.label}</Button>
            {data.secondary ? <Button href={data.secondary.href} variant="outline-light" size="lg">{data.secondary.label}</Button> : null}
          </div>
        </div>
        {data.preview ? (
          <div className={styles.preview}>
            <PreviewCard preview={data.preview} />
          </div>
        ) : null}
        {data.announcement ? (
          <a href={data.announcement.href} className={styles.card}>
            {data.announcement.media ? <Media media={data.announcement.media} className={styles.thumb} sizes="56px" /> : null}
            <span className={styles.cardText}>
              <span className={`t-label ${styles.cardLabel}`}>{data.announcement.label}</span>
              <span className={styles.cardTitle}>{data.announcement.text}</span>
            </span>
            <Icon name="arrow-up-right" size={14} className={styles.cardIcon} />
          </a>
        ) : null}
      </div>
    </section>
  );
}
