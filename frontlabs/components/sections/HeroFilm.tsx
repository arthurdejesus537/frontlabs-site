"use client";
import { useEffect, useRef, useState } from "react";
import type { HeroFilmContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import styles from "./HeroFilm.module.css";

/**
 * Herói com "vídeo" de fundo (Ploy, 1ª dobra): moldura grande, título enorme centralizado,
 * frase + 2 botões embaixo dele, card de anúncio no canto inferior esquerdo (opcional)
 * e botão play/pause no canto inferior direito (só quando há vídeo).
 * Sem vídeo: a imagem com a câmera lenta + grão + véu. Reduced-motion: vídeo parado no poster.
 */
export function HeroFilm({ data }: { data: HeroFilmContent }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // reduced-motion: fica parado no poster; o estado do botão segue os eventos do próprio vídeo
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {});
  }, []);

  if (!data.enabled) return null;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <section id={data.id} data-section="hero-film" className={styles.wrap} aria-labelledby={`${data.id}-title`}>
      <div className={styles.frame}>
        {data.video ? (
          <video ref={videoRef} className={styles.video} src={data.video.src} poster={data.video.poster} muted loop playsInline preload="metadata" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
        ) : (
          <Media media={data.image} fill priority className={styles.media} />
        )}
        <div className={styles.veil} aria-hidden="true" />
        <div className={styles.copy}>
          <h1 id={`${data.id}-title`} className={styles.title}>{data.title}</h1>
          <p className={styles.lead}>{data.lead}</p>
          <div className={styles.ctas}>
            <Button href={data.primary.href} variant="light" size="lg">{data.primary.label}</Button>
            {data.secondary ? <Button href={data.secondary.href} variant="outline-light" size="lg">{data.secondary.label}</Button> : null}
          </div>
        </div>
        {data.card ? (
          <a href={data.card.href} className={styles.card}>
            {data.card.media ? <Media media={data.card.media} className={styles.thumb} sizes="56px" /> : null}
            <span className={styles.cardText}>
              <span className={`t-label ${styles.cardLabel}`}>{data.card.label}</span>
              <span className={styles.cardTitle}>{data.card.text}</span>
            </span>
            <Icon name="arrow-up-right" size={14} />
          </a>
        ) : null}
        {data.video ? (
          <button type="button" className={styles.play} onClick={toggle} aria-label={playing ? data.pauseLabel : data.playLabel}>
            <Icon name={playing ? "pause" : "play"} size={14} />
          </button>
        ) : null}
      </div>
    </section>
  );
}
