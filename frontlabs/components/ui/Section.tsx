import type { ReactNode } from "react";

/** Envelope de seção: âncora, data-section (usado pelos scripts de QA) e o respiro padrão. */
export function Section({ id, name, children, className, flush, labelledBy }: { id: string; name: string; children: ReactNode; className?: string; flush?: boolean; labelledBy?: string }) {
  return (
    <section id={id} data-section={name} aria-labelledby={labelledBy} className={[flush ? "" : "section", className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}
