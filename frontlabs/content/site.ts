import type { PreviewSpec, Site } from "./types";

/*
 * Conteúdo da home da Front Labs (docs/FRONTLABS-HOME.md). Site em inglês americano.
 * Regra: nada de número, cliente, depoimento, prazo ou logo sem fonte.
 * Tudo que precisa de confirmação está marcado [CONFIRMAR] e listado em docs/REVISAR.md.
 */

const EMAIL = "archielewis49@gmail.com"; // [CONFIRMAR se é o e-mail público] — FRONTLABS-HOME §4
// [CONFIRMAR] não há link de agenda: por enquanto o botão abre um e-mail para o Arch pedindo a call
const CALL_HREF = `mailto:archielewis49@gmail.com?subject=${encodeURIComponent("15-minute call")}`;
const AI_PROMPT = encodeURIComponent("What does Front Labs, the website studio for local businesses, do? How does its free website preview work?");

/** O site do próprio visitante, ilustrativo (FRONTLABS-HOME §1). Nunca um cliente real. */
const visitorPreview: PreviewSpec = {
  url: "preview.frontlabs.co/your-business",
  eyebrow: "/your-business",
  title: "Your Business",
  text: "Your new homepage, built before we ever talk.",
  cta: "Book a visit",
  rows: [
    { label: "/calls", value: "Book a visit" },
    { label: "/hours", value: "Open today" },
    { label: "/reviews", value: "On Google" },
  ],
  status: "preview ready before the call",
};

const unused = "[seção desligada na Front Labs]";

export const site: Site = {
  meta: {
    lang: "en-US",
    title: "Front Labs — Online stuff, handled.",
    description: "We rebuild your local business website before you pay a thing. You see it first, then decide. No monthly fee.",
  },

  ui: {
    skip: "Skip to content",
    external: "(opens in a new tab)",
    home: "home",
    navMain: "Main",
    navFooter: "Footer",
    menu: "Menu",
    preview: "Preview",
    groups: "Groups",
    mediaSpace: "Media",
    step: "Step",
    pauseMarquee: "Pause scrolling list",
    playMarquee: "Resume scrolling list",
  },

  announcement: {
    enabled: true,
    text: "Launch offer for our first local clients [CONFIRMAR]",
    link: { label: "See pricing", href: "#pricing" },
    cta: { label: "Get my free preview", href: "#cta" },
  },

  header: {
    brand: "FrontLabs",
    brandHref: "/",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "What you get", href: "#what-you-get" },
      { label: "Pricing", href: "#pricing" },
      { label: "Questions", href: "#questions" },
    ],
    secondary: { label: "Book a 15-minute call", href: CALL_HREF },
    primary: { label: "Get my free preview", href: "#cta" },
    sticky: true,
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },

  hero: {
    enabled: true,
    id: "top",
    variant: "calm",
    label: "/for local businesses",
    title: "Online stuff, handled.",
    titleTurn: "Go run your business.",
    lead: "We rebuild your website before you pay a thing. You see it first, then decide.",
    primary: { label: "Get my free preview", href: "#cta" },
    secondary: { label: "See how it works", href: "#how-it-works" },
    media: { kind: "image", src: "/img/foto-borrada-hero.jpg", alt: "" },
    preview: visitorPreview,
  },

  order: [
    "logos",
    "statement",
    "pillars",
    "steps",
    "tabs",
    "timeline",
    "audience",
    "offers",
    "faq",
    "finalCta",
    // desligadas (FRONTLABS-HOME §2): proof, library, news, spotlight
    "proof",
    "library",
    "spotlight",
    "news",
  ],

  logos: {
    enabled: true,
    id: "businesses",
    mode: "words",
    intro: "Built for the businesses your town runs on",
    items: [
      "/home services",
      "/pool builders",
      "/plumbers",
      "/clinics",
      "/studios",
      "/restaurants",
      "/shops",
      "/wedding venues",
    ].map((name) => ({ name })),
  },

  statement: {
    enabled: true,
    id: "why",
    style: "calm",
    lines: ["People look you up before they call."],
    soft: "If your site looks dead, they call someone else.",
  },

  pillars: {
    enabled: true,
    id: "what-we-do",
    items: [
      { icon: "monitor", title: "We build it", text: "A new site, coded the right way for Google and designed around one thing: calls and bookings." },
      { icon: "arrow-up-right", title: "We launch it", text: "On your domain, in your name. You own it. No monthly fee, no hosting bill." },
      { icon: "check", title: "We handle it", text: "Need changes after launch? Signature includes six months of care: revisions and edits, handled." },
    ],
  },

  steps: {
    enabled: true,
    id: "how-it-works",
    label: "/how it works",
    title: "You see it first,",
    titleTurn: "then decide.",
    items: [
      {
        label: "/before any call",
        title: "We rebuild your site",
        text: "Send us your current website. We build the new one before we ever talk.",
        visual: { kind: "preview", preview: visitorPreview },
      },
      {
        label: "/15 minutes",
        title: "A 15-minute call",
        text: "We walk you through the preview. Ask anything. No pitch deck.",
        visual: { kind: "invite", month: "Oct", day: "14", title: "Your preview, walked through", meta: "15 min · call", reply: "Works for me." },
      },
      {
        label: "/live",
        title: "It goes live",
        text: "Like it? We launch it on your domain, in your name.",
        visual: { kind: "live", domain: "yourbusiness.com", word: "Live." },
      },
    ],
  },

  tabs: {
    enabled: true,
    id: "what-you-get",
    label: "/what you get",
    title: "Everything a local business site should do.",
    intervalMs: 6000,
    pauseLabel: "Pause auto-advance",
    playLabel: "Resume auto-advance",
    groups: [
      {
        name: "Your new site",
        tabs: [
          {
            title: "Built right for Google",
            text: "Clean code, fast pages, a structure Google can read. No ranking promises, just the right foundation.",
            media: { kind: "placeholder" },
            preview: {
              url: "preview.frontlabs.co/your-business",
              eyebrow: "/under the hood",
              title: "Built the right way for Google",
              rows: [
                { label: "/code", value: "Clean" },
                { label: "/phones", value: "Fast on every one" },
                { label: "/pages", value: "Easy to read" },
              ],
              status: "the right foundation",
            },
          },
          {
            title: "Made for calls and bookings",
            text: "Every page points to one thing: call, book or visit.",
            media: { kind: "placeholder" },
            preview: { ...visitorPreview, status: "one tap to call" },
          },
          {
            title: "Yours, not ours",
            text: "Your name, your domain, your site. No monthly fee and no hosting bill.",
            media: { kind: "placeholder" },
            preview: {
              url: "yourbusiness.com",
              eyebrow: "/ownership",
              title: "It's your site",
              rows: [
                { label: "/domain", value: "Yours" },
                { label: "/name", value: "Yours" },
                { label: "/monthly fee", value: "None" },
              ],
              status: "paid once",
            },
          },
          {
            title: "Front Cinematic",
            text: "Six cinematic AI videos and color grading for all your photos. $197 with Launch, included in Signature.",
            media: { kind: "placeholder" },
            preview: {
              url: "preview.frontlabs.co/your-business",
              eyebrow: "/front cinematic",
              title: "Your place, in motion",
              rows: [
                { label: "/videos", value: "6 cinematic AI" },
                { label: "/photos", value: "All color-graded" },
                { label: "/price", value: "$197 add-on" },
              ],
              status: "included in Signature",
            },
          },
          {
            title: "Bookings and reviews on autopilot",
            text: "Signature adds automatic booking with automatic replies, and asks your customers for a Google review.",
            media: { kind: "placeholder" },
            preview: {
              url: "preview.frontlabs.co/your-business",
              eyebrow: "/signature",
              title: "Handled while you work",
              rows: [
                { label: "/booking", value: "Automatic" },
                { label: "/replies", value: "Automatic" },
                { label: "/reviews", value: "Asked for you" },
              ],
              status: "Signature only",
            },
          },
        ],
      },
    ],
  },

  timeline: {
    enabled: true,
    id: "handled",
    label: "/example week with Signature · illustrative",
    titleStart: "While you run your business,",
    titleEnd: "the online stuff gets handled.",
    field: "image",
    background: { kind: "gradient", src: "/img/gradiente-horizonte-16x9.jpg", alt: "" },
    items: [
      { time: "Mon 9:12 AM", tag: "/booking", tone: 1, title: "A booking request gets an answer", text: "An automatic reply goes out when someone asks for a time." },
      { time: "Tue 2:30 PM", tag: "/reviews", tone: 2, title: "A review request goes out", text: "After the visit, your customer gets a short ask for a Google review." },
      { time: "Wed 10:05 AM", tag: "/care", tone: 3, title: "Holiday hours, updated", text: "You send the change. It's part of your six months of care." },
      { time: "Fri 4:40 PM", tag: "/photos", tone: 1, title: "New photos on the gallery", text: "Color-graded with Front Cinematic, not stuck in your camera roll." },
    ],
  },

  audience: {
    enabled: true,
    id: "who-its-for",
    tag: "/who it's for",
    title: "For the businesses your town runs on.",
    text: "If people find you online and then call, book or walk in, this is for you.",
    items: [
      {
        name: "Home services",
        short: "Pool builders, plumbers, cleaners, roofers.",
        points: ["A call button on every page", "Service area and hours, clear on every page", "Built the right way for Google"],
        primary: { label: "Get my free preview", href: "#cta" },
      },
      {
        name: "Studios & clinics",
        short: "Bookings without the phone tag.",
        points: ["Booking front and center", "Automatic booking with automatic replies (Signature)", "Fast on every phone"],
        primary: { label: "Get my free preview", href: "#cta" },
      },
      {
        name: "Restaurants & shops",
        short: "Hours, menu, directions. Where people look.",
        points: ["Hours and directions up top", "Photos that look like the real place", "Your domain, your name, no monthly fee"],
        primary: { label: "Get my free preview", href: "#cta" },
      },
      {
        name: "Wedding & event venues",
        short: "Where we started.",
        points: ["A site that shows the space and gets tours booked", "Automatic replies to date questions (Signature)", "Google review requests after every event (Signature)"],
        primary: { label: "Get my free preview", href: "#cta" },
      },
    ],
  },

  offers: {
    enabled: true,
    id: "pricing",
    mode: "pricing",
    label: "/pricing",
    title: "Pay once. No monthly fee.",
    lead: "No subscription, no hosting bill. The site is yours.",
    items: [
      {
        name: "Launch",
        price: "[CONFIRMAR]",
        priceNote: "paid once",
        phrase: "Your new site, built and launched.",
        text: "A new site built for calls and bookings. Creative and automatic booking are not included.",
        features: [
          "Free preview before you pay",
          "15-minute call to walk you through it",
          "Code built the right way for Google",
          "Design made for calls and bookings",
          "Your domain, your name, no monthly fee",
          "Add Front Cinematic for $197: 6 cinematic AI videos + color grading of all your photos",
        ],
        ctas: [{ label: "Get my free preview", href: "#cta", variant: "primary" }],
      },
      {
        name: "Signature",
        badge: "everything handled",
        featured: true,
        price: "$999",
        priceNote: "paid once, or $500 setup + 6 × $99 [CONFIRMAR qual mostrar]",
        phrase: "Launch, plus the stuff that runs itself.",
        text: "For businesses that want bookings and reviews handled, not just a new site.",
        features: [
          "Everything in Launch",
          "Front Cinematic included",
          "Automatic booking with automatic replies",
          "Automatic Google review requests",
          "6 months of care: revisions and edits",
        ],
        ctas: [{ label: "Get my free preview", href: "#cta", variant: "primary" }],
      },
    ],
    footnote: "You see the preview first. You pay only if you want it live.",
  },

  faq: {
    enabled: true,
    id: "questions",
    label: "/questions",
    title: "Straight answers.",
    text: "If yours isn't here, ask Arch.",
    contact: {
      name: "Arch",
      initial: "A",
      bubble: "Something else on your mind?",
      email: EMAIL,
      emailNote: "[CONFIRMAR e-mail público]",
      button: "Email Arch",
    },
    items: [
      { q: "Do I pay anything before I see the new site?", verdict: "No.", a: "We build your preview first. You see it on a 15-minute call, then decide." },
      { q: "Is there a monthly fee?", verdict: "No.", a: "No subscription and no monthly hosting fee. You pay once and the site is yours." },
      { q: "Can you get me to #1 on Google?", verdict: "No one can.", a: "Anyone who promises that is guessing. We build your site the right way for Google: clean code, fast pages, a clear structure." },
      { q: "Do I own the site?", verdict: "Yes.", a: "It lives on your domain, in your name." },
      { q: "Is this only for wedding venues?", verdict: "No.", a: "We started with venues. We build for any local business that lives on calls, bookings and walk-ins." },
    ],
  },

  finalCta: {
    enabled: true,
    id: "cta",
    style: "calm",
    title: "See your new site before you pay a thing.",
    titleTurn: "Fire your web designer. Politely.",
    text: "Drop your current website. We'll build your preview first.",
    inputLabel: "Your current website",
    inputType: "url",
    placeholder: "yourbusiness.com",
    button: "Get my free preview",
    microcopy: "Free preview · You see it first, then decide",
    errorEmpty: "Add your website so we know what to rebuild.",
    errorInvalid: "That doesn't look like a web address. Try yourbusiness.com",
    success: "Got it. We'll start on your preview.",
    background: { kind: "gradient", src: "/img/gradiente-horizonte-16x9.jpg", alt: "" },
  },

  footer: {
    brand: "FrontLabs",
    tagline: "Online stuff, handled.",
    contact: { label: "Book a 15-minute call", href: CALL_HREF },
    ask: {
      title: "Want the short version?",
      text: "Ask an AI what Front Labs does.",
      items: [
        { label: "ChatGPT", href: `https://chatgpt.com/?q=${AI_PROMPT}` },
        { label: "Claude", href: `https://claude.ai/new?q=${AI_PROMPT}` },
        { label: "Perplexity", href: `https://www.perplexity.ai/search?q=${AI_PROMPT}` },
      ],
    },
    columns: [
      {
        title: "Site",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "What you get", href: "#what-you-get" },
          { label: "Pricing", href: "#pricing" },
          { label: "Questions", href: "#questions" },
        ],
      },
      {
        title: "Talk to us",
        links: [
          { label: "Get my free preview", href: "#cta" },
          { label: "Book a 15-minute call", href: CALL_HREF },
          { label: "Email Arch", href: `mailto:${EMAIL}` },
        ],
      },
    ],
    legal: "© 2026 Front Labs",
    legalLinks: [],
    social: [],
  },

  /* ---- desligadas (FRONTLABS-HOME §2): sem números reais, sem biblioteca, sem notícias ---- */
  proof: { enabled: false, id: "proof", field: 1, title: unused, text: unused, cards: [] },
  library: { enabled: false, id: "library", field: 3, title: unused, text: unused, prevLabel: "Previous", nextLabel: "Next", items: [] },
  spotlight: { enabled: false, id: "spotlight", label: unused, text: unused, media: { kind: "placeholder" }, items: [] },
  news: { enabled: false, id: "news", title: unused, more: "Read more", items: [] },
};
