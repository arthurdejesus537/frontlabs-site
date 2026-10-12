import Image from "next/image";
import type { MediaSpec } from "@/content/types";
import { MediaPlaceholder } from "./MediaPlaceholder";
import styles from "./Media.module.css";

/**
 * Mídia em qualquer formato. `fill` ocupa o pai (que precisa de position: relative).
 * O tipo "preview" é desenhado pelo próprio componente da seção (PreviewCard).
 */
export function Media({ media, fill, className, sizes = "100vw", priority }: { media: MediaSpec; fill?: boolean; className?: string; sizes?: string; priority?: boolean }) {
  const cls = [styles.media, fill ? styles.fill : "", className].filter(Boolean).join(" ");
  const ratio = media.ratio;
  if (media.kind === "image" && media.src) {
    return (
      <div className={cls} style={!fill && ratio ? { aspectRatio: ratio } : undefined} data-media>
        <Image src={media.src} alt={media.alt ?? ""} fill sizes={sizes} priority={priority} className={styles.img} />
      </div>
    );
  }
  if (media.kind === "video" && media.src) {
    return (
      <div className={cls} style={!fill && ratio ? { aspectRatio: ratio } : undefined} data-media>
        <video className={styles.img} src={media.src} poster={media.poster} autoPlay muted loop playsInline aria-label={media.alt} />
      </div>
    );
  }
  if (media.kind === "gradient") {
    return (
      <div className={`${cls} ${styles.gradient}`} style={!fill && ratio ? { aspectRatio: ratio } : undefined} {...(media.alt ? { role: "img", "aria-label": media.alt } : { "aria-hidden": true })} data-media>
        {media.src ? <Image src={media.src} alt="" fill sizes={sizes} className={styles.img} priority={priority} /> : null}
        {media.label && !media.src ? <span className={`t-label ${styles.gLabel}`}>{media.label}</span> : null}
      </div>
    );
  }
  return <MediaPlaceholder label={media.label} ratio={ratio} tone={media.tone} fill={fill} className={className} />;
}
