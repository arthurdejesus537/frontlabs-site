/* Tipos do conteúdo. Todo texto do site mora em content/site.ts. */

export type Cta = { label: string; href: string };

/** Mídia: foto, vídeo, bloco cinza de placeholder, gradiente ou card de preview em HTML. */
export type MediaSpec = {
  kind: "image" | "video" | "placeholder" | "gradient" | "preview";
  /** proporção CSS, ex.: "16/9", "4/5" */
  ratio?: string;
  src?: string;
  poster?: string;
  alt?: string;
  /** rótulo mono do placeholder, ex.: "[foto 16:9 · mín. 1600px]" */
  label?: string;
  /** placeholder escuro (quando há texto branco por cima) */
  tone?: "light" | "dark";
};

export type PreviewSpec = {
  url: string;
  title: string;
  eyebrow?: string;
  text?: string;
  cta?: string;
  rows?: { label: string; value: string }[];
  status: string;
};

export type SectionKey =
  | "logos"
  | "statement"
  | "pillars"
  | "offers"
  | "tabs"
  | "proof"
  | "timeline"
  | "library"
  | "spotlight"
  | "audience"
  | "news"
  | "steps"
  | "faq"
  | "finalCta";

type Base = { enabled: boolean; id: string };

export type Announcement = { enabled: boolean; text: string; link?: Cta; cta?: Cta };

export type HeaderContent = {
  brand: string;
  brandHref: string;
  links: Cta[];
  secondary: Cta;
  primary: Cta;
  sticky: boolean;
  menuLabel: string;
  closeLabel: string;
};

export type HeroContent = Base & {
  variant: "calm" | "shout";
  label?: string;
  title: string;
  /** segunda linha do título (virada), opcional */
  titleTurn?: string;
  lead: string;
  primary: Cta;
  secondary?: Cta;
  media: MediaSpec;
  announcement?: { label: string; text: string; href: string; media?: MediaSpec };
  preview?: PreviewSpec;
};

export type LogosContent = Base & { intro: string; items: { name: string; src?: string }[]; mode: "logos" | "words" };

export type StatementContent = Base & { style: "shout" | "calm"; lines: string[]; soft?: string; note?: string };

export type PillarsContent = Base & {
  label?: string;
  title?: string;
  items: { icon: string; title: string; text: string }[];
};

export type OfferItem = {
  name: string;
  media?: MediaSpec;
  phrase: string;
  text: string;
  price?: string;
  priceNote?: string;
  features?: string[];
  ctas: (Cta & { variant?: "primary" | "secondary" | "outline" })[];
  meta?: string;
  featured?: boolean;
  badge?: string;
};
export type OffersContent = Base & { label?: string; title: string; lead?: string; mode: "products" | "pricing"; items: OfferItem[]; footnote?: string };

export type TabItem = { title: string; text: string; media: MediaSpec; preview?: PreviewSpec };
export type TabsContent = Base & {
  label?: string;
  title?: string;
  intervalMs: number;
  groups: { name: string; tabs: TabItem[] }[];
  pauseLabel: string;
  playLabel: string;
};

export type ProofCard = {
  tag: string;
  value: number;
  prefix?: string;
  suffix?: string;
  caption: string;
  spark: number[];
  note: string;
  stats: { label: string; value: string }[];
  status: string;
};
export type ProofContent = Base & { title: string; text: string; field: 1 | 2 | 3; cards: ProofCard[] };

export type TimelineContent = Base & {
  label?: string;
  titleStart: string;
  titleEnd: string;
  field: 1 | 2 | 3 | "image";
  background?: MediaSpec;
  items: { time: string; tag: string; tone: 1 | 2 | 3; title: string; text: string }[];
};

export type LibraryContent = Base & {
  title: string;
  text: string;
  field: 1 | 2 | 3;
  prevLabel: string;
  nextLabel: string;
  items: { brand: string; title: string; author: string; text: string; href?: string }[];
};

export type SpotlightContent = Base & {
  label: string;
  text: string;
  cta?: Cta;
  media: MediaSpec;
  items: { title: string; text: string; href: string }[];
};

export type AudienceContent = Base & {
  tag: string;
  title: string;
  text?: string;
  items: { name: string; short: string; points: string[]; primary?: Cta; secondary?: Cta }[];
};

export type NewsContent = Base & {
  title: string;
  items: { title: string; text: string; href: string; media: MediaSpec }[];
  more: string;
};

/** Passos (DESIGN §6.8) — componente só da Front Labs. */
export type StepVisual =
  | { kind: "preview"; preview: PreviewSpec }
  | { kind: "invite"; month: string; day: string; title: string; meta: string; reply: string }
  | { kind: "live"; domain: string; word: string };
export type StepsContent = Base & {
  label?: string;
  title: string;
  titleTurn?: string;
  items: { label: string; title: string; text: string; visual: StepVisual }[];
};

/** Perguntas (DESIGN §6.9) — componente só da Front Labs. */
export type FaqContent = Base & {
  label?: string;
  title: string;
  text: string;
  contact: { name: string; initial: string; bubble: string; email: string; emailNote?: string; button: string };
  items: { q: string; verdict: string; a: string }[];
};

export type FinalCtaContent = Base & {
  style: "shout" | "calm";
  title: string;
  titleTurn?: string;
  text: string;
  inputLabel: string;
  inputType: "email" | "url";
  placeholder: string;
  button: string;
  microcopy: string;
  errorEmpty: string;
  errorInvalid: string;
  success: string;
  background?: MediaSpec;
};

export type FooterContent = {
  brand: string;
  tagline: string;
  contact: Cta;
  ask?: { title: string; text: string; items: Cta[] };
  columns: { title: string; links: Cta[] }[];
  legal: string;
  legalLinks: Cta[];
  social: { label: string; href: string; icon: "x" | "instagram" | "linkedin" | "youtube" }[];
};

export type Site = {
  meta: { lang: string; title: string; description: string };
  announcement: Announcement;
  header: HeaderContent;
  hero: HeroContent;
  order: SectionKey[];
  logos: LogosContent;
  statement: StatementContent;
  pillars: PillarsContent;
  offers: OffersContent;
  tabs: TabsContent;
  proof: ProofContent;
  timeline: TimelineContent;
  library: LibraryContent;
  spotlight: SpotlightContent;
  audience: AudienceContent;
  news: NewsContent;
  steps: StepsContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
  ui: { skip: string; external: string };
};
