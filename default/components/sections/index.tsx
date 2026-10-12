import type { ComponentType } from "react";
import type { SectionKey } from "@/content/types";
import { LogoStrip } from "./LogoStrip";
import { Statement } from "./Statement";
import { Pillars } from "./Pillars";
import { Offers } from "./Offers";
import { FeatureTabs } from "./FeatureTabs";
import { ProofField } from "./ProofField";
import { Timeline } from "./Timeline";
import { Library } from "./Library";
import { Spotlight } from "./Spotlight";

/* Mapa chave → seção. Cada seção lê o próprio bloco de site.ts e some se `enabled` for false. */
export const sections: Partial<Record<SectionKey, ComponentType>> = {
  logos: LogoStrip,
  statement: Statement,
  pillars: Pillars,
  offers: Offers,
  tabs: FeatureTabs,
  proof: ProofField,
  timeline: Timeline,
  library: Library,
  spotlight: Spotlight,
};
