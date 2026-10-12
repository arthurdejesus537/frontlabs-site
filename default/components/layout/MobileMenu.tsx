"use client";
import { useEffect, useRef } from "react";
import type { HeaderContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import styles from "./MobileMenu.module.css";

/** Menu do celular: abre abaixo do nav, prende o foco, fecha com Esc ou ao escolher um link. */
export function MobileMenu({ id, open, onClose, data }: { id: string; open: boolean; onClose: () => void; data: HeaderContent }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = ref.current;
    // o painel começa logo abaixo do nav, onde quer que ele esteja na tela
    const header = panel?.parentElement;
    if (panel && header) panel.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    const focusables = () => [...(panel?.querySelectorAll<HTMLElement>("a,button") ?? [])];
    focusables()[0]?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const f = focusables();
        const toggle = document.querySelector<HTMLElement>(`[aria-controls="${id}"]`);
        const all = toggle ? [toggle, ...f] : f;
        const i = all.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey ? (i <= 0 ? all.length - 1 : i - 1) : (i === all.length - 1 ? 0 : i + 1);
        e.preventDefault();
        all[next]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, id]);

  return (
    <div id={id} ref={ref} className={[styles.panel, open ? styles.open : ""].join(" ")} hidden={!open}>
      <nav aria-label="Menu">
        <ul className={styles.list}>
          {data.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link} onClick={onClose}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.actions}>
        <Button href={data.secondary.href} variant="secondary" size="lg" onClick={onClose}>{data.secondary.label}</Button>
        <Button href={data.primary.href} variant="primary" size="lg" onClick={onClose}>{data.primary.label}</Button>
      </div>
    </div>
  );
}
