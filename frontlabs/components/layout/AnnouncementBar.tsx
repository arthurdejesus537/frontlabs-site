import type { Announcement } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./AnnouncementBar.module.css";

/** Faixa de anúncio (A): 48px, texto + link sublinhado + botão contornado pequeno. */
export function AnnouncementBar({ data }: { data: Announcement }) {
  if (!data.enabled) return null;
  return (
    <div className={styles.bar} data-section="announcement">
      <p className={styles.text}>
        <span>{data.text}</span>
        {data.link ? <a href={data.link.href} className={styles.link}>{data.link.label}</a> : null}
      </p>
      {data.cta ? (
        <Button href={data.cta.href} variant="outline-light" size="sm" icon={<Icon name="chevron" />} className={styles.cta}>
          {data.cta.label}
        </Button>
      ) : null}
    </div>
  );
}
