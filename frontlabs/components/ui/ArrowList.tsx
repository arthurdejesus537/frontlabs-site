import Link from "next/link";
import type { ArrowListItem } from "@/content/types";
import { Icon } from "./Icon";
import styles from "./ArrowList.module.css";

/** Lista com setas (DESIGN §6.4): abre com linha preta de 2px, título 550, descrição secundária, seta à direita. */
export function ArrowList({ items, className }: { items: ArrowListItem[]; className?: string }) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")}>
      {items.map((it) => {
        const inner = (
          <>
            <span className={styles.body}>
              <span className={styles.title}>{it.title}</span>
              <span className={styles.text}>{it.text}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true"><Icon name={it.href ? "arrow-up-right" : "arrow"} size={14} /></span>
          </>
        );
        return <li key={it.title}>{it.href ? <Link href={it.href} className={styles.item}>{inner}</Link> : <div className={styles.item}>{inner}</div>}</li>;
      })}
    </ul>
  );
}
