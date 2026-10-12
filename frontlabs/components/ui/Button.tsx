import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "outline" | "light" | "outline-light" | "link";
export type ButtonSize = "lg" | "md" | "sm";

type Common = { variant?: ButtonVariant; size?: ButtonSize; icon?: ReactNode; className?: string; children: ReactNode };
type AsLink = Common & { href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", icon, className, children, ...rest } = props;
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span>{children}</span>
      {icon ? <span className={styles.icon} aria-hidden="true">{icon}</span> : null}
    </>
  );
  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...a } = rest as AsLink;
    const external = /^https?:\/\//.test(href);
    if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...a}>{inner}</a>;
    }
    return <Link href={href} className={cls} {...a}>{inner}</Link>;
  }
  const b = rest as Omit<AsButton, keyof Common>;
  return <button type="button" className={cls} {...b}>{inner}</button>;
}
