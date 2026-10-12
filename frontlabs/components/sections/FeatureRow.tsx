import type { FeatureRowContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Stage } from "@/components/ui/Stage";
import styles from "./FeatureRow.module.css";

/** Linha de feature (página de feature da Ploy): texto de um lado e o palco do outro, alternando. */
export function FeatureRow({ data, flip, index }: { data: FeatureRowContent; flip?: boolean; index: number }) {
  const id = `step-${index + 1}`;
  return (
    <article id={id} className={[styles.row, flip ? styles.flip : ""].join(" ")} aria-labelledby={`${id}-title`}>
      <div className={styles.copy}>
        <p className={`t-label ${styles.label}`}>{data.label}</p>
        <h3 id={`${id}-title`} className="t-display">{data.title}</h3>
        <p className={styles.text}>{data.text}</p>
        {data.points?.length ? (
          <ul className={styles.points}>
            {data.points.map((p) => <li key={p}><Icon name="check" size={14} className={styles.check} />{p}</li>)}
          </ul>
        ) : null}
      </div>
      <Stage stage={data.stage} className={styles.stage} sizes="(max-width: 1023px) 100vw, 55vw" />
    </article>
  );
}
