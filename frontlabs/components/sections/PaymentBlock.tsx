import styles from "./PaymentBlock.module.css";

/** Bloco cinza "How credits work" da Ploy → "How payment works": título e frase à esquerda, linhas à direita. */
export function PaymentBlock({ data }: { data: { title: string; text: string; rows: { title: string; text: string }[] } }) {
  return (
    <section data-section="payment" className="field-wrap" aria-labelledby="payment-title">
      <div className={styles.panel}>
        <div className={styles.head}>
          <h2 id="payment-title" className="t-display">{data.title}</h2>
          <p className={styles.text}>{data.text}</p>
        </div>
        <dl className={styles.rows}>
          {data.rows.map((r) => (
            <div key={r.title} className={styles.row}>
              <dt className={styles.rowTitle}>{r.title}</dt>
              <dd className={styles.rowText}>{r.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
