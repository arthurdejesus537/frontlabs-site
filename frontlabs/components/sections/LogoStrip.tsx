import Image from "next/image";
import { site } from "@/content/site";
import { Marquee } from "@/components/ui/Marquee";
import styles from "./LogoStrip.module.css";

/** Logos (A+B): frase cinza centralizada + marquee. `mode: "words"` troca logos por palavras em mono. */
export function LogoStrip() {
  const data = site.logos;
  if (!data.enabled) return null;
  return (
    <section id={data.id} data-section="logos" className={styles.wrap} aria-label={data.intro}>
      <p className={styles.intro}>{data.intro}</p>
      <Marquee label={data.intro}>
        {data.items.map((item, i) =>
          item.src ? (
            <Image key={i} src={item.src} alt={item.name} width={120} height={32} className={styles.logo} />
          ) : (
            <span key={i} className={data.mode === "words" ? styles.word : styles.ph}>{item.name}</span>
          ),
        )}
      </Marquee>
    </section>
  );
}
