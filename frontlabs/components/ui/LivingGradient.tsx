"use client";
import Image from "next/image";
import { useInView } from "./useMotion";
import styles from "./LivingGradient.module.css";

const HORIZON = "/img/gradiente-horizonte-16x9.jpg";

/**
 * Horizonte vivo (fundo de "Running while you work", Booking e Launch): três camadas do mesmo
 * arquivo, cada uma com translate + scale + poucos graus de rotação em loop `alternate`
 * (19–32s, fases diferentes). A de cima borrada, a do meio em soft-light: as manchas "respiram"
 * sem trocar as cores do arquivo (DESIGN: sem color grade). Só transform/opacity animam.
 * Pausa fora da tela; parado com reduced-motion. O grão fica por conta do contêiner
 * ([data-field] / [data-stage] em brand.css), parado por cima.
 * `dim`: véu de 28% (= Horizonte a 72%) quando há texto branco por cima.
 */
export function LivingGradient({ dim = false, sizes = "100vw", className }: { dim?: boolean; sizes?: string; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0);
  return (
    <div ref={ref} className={[styles.root, className].filter(Boolean).join(" ")} data-on={inView ? "" : undefined} aria-hidden="true">
      <div className={`${styles.layer} ${styles.base}`}><Image src={HORIZON} alt="" fill sizes={sizes} /></div>
      <div className={`${styles.layer} ${styles.mid}`}><Image src={HORIZON} alt="" fill sizes={sizes} /></div>
      <div className={`${styles.layer} ${styles.top}`}><Image src={HORIZON} alt="" fill sizes={sizes} /></div>
      {dim ? <span className={styles.veil} /> : null}
    </div>
  );
}
