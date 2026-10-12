import type { ComponentType } from "react";
import type { SectionKey } from "@/content/types";
import { LogoStrip } from "./LogoStrip";
import { Statement } from "./Statement";
import { Pillars } from "./Pillars";

/* Mapa chave → seção. Cada seção lê o próprio bloco de site.ts e some se `enabled` for false. */
export const sections: Partial<Record<SectionKey, ComponentType>> = {
  logos: LogoStrip,
  statement: Statement,
  pillars: Pillars,
};
