import type { FooterContent } from "@/content/types";
export function Footer({ data }: { data: FooterContent }) {
  return <footer data-section="footer">{data.brand}</footer>;
}
