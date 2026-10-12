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
import { Audience } from "./Audience";
import { News } from "./News";
import { FinalCta } from "./FinalCta";
import { Steps } from "./Steps";
import { Faq } from "./Faq";
import { HeroFilm } from "./HeroFilm";
import { ScrollFill } from "./ScrollFill";
import { LiveCards } from "./LiveCards";
import { Results } from "./Results";
import { site } from "@/content/site";

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
  audience: Audience,
  news: News,
  steps: () => <Steps />,
  faq: () => <Faq />,
  finalCta: () => <FinalCta />,
  heroFilm: () => <HeroFilm data={site.heroFilm} />,
  scrollFill: () => <ScrollFill data={site.scrollFill} />,
  liveCards: () => <LiveCards data={site.liveCards} />,
  results: () => <Results data={site.results} />,
};
