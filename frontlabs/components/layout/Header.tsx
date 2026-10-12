"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HeaderContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

/** Nav da Front Labs (DESIGN §6.5): pílula branca flutuante com borda clara — logo, links e os dois botões pequenos. */
export function Header({ data }: { data: HeaderContent }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1101px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={[styles.header, data.sticky ? styles.sticky : ""].join(" ")} data-section="header">
      <div className={styles.inner}>
        <Link href={data.brandHref} className={styles.brand} aria-label={`${data.brand}, início`}>
          <Logo label={data.brand} />
        </Link>
        <nav aria-label="Principal" className={styles.nav}>
          <ul className={styles.links}>
            {data.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <Button href={data.secondary.href} variant="secondary" size="sm" className={styles.hideMobile}>{data.secondary.label}</Button>
          <Button href={data.primary.href} variant="primary" size="sm">{data.primary.label}</Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? data.closeLabel : data.menuLabel}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
      <MobileMenu id="menu-mobile" open={open} onClose={close} data={data} />
    </header>
  );
}
