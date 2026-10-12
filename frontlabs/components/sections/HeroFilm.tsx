"use client";
import { useEffect, useRef } from "react";
import type { HeroFilmContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import styles from "./HeroFilm.module.css";

/**
 * Herói com "vídeo" de fundo (Ploy, 1ª dobra): moldura grande, título enorme centralizado,
 * frase + 2 botões embaixo dele, card de anúncio no canto inferior esquerdo (opcional)
 * O vídeo roda sempre, mudo e em loop, sem botão de play/pause (pedido do Arthur, 12/10/2026).
 * Sem vídeo: a imagem com a câmera lenta + grão + véu.
 */
export function HeroFilm({ data }: { data: HeroFilmContent }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // reforço do autoPlay: alguns navegadores só começam depois de um play() explícito
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  if (!data.enabled) return null;

  return (
    <section id={data.id} data-section="hero-film" className={styles.wrap} aria-labelledby={`${data.id}-title`}>
      <div className={styles.frame}>
        {data.video ? (
          <video ref={videoRef} className={styles.video} src={data.video.src} poster={data.video.poster} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
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
      </div>
    </section>
  );
}
