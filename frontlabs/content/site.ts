import type { Site } from "./types";

/*
 * Conteúdo do default: só instruções entre colchetes, em português.
 * Cada marca troca este arquivo inteiro. `order` define a sequência da home;
 * `enabled: false` tira a seção sem quebrar o layout.
 */
export const site: Site = {
  meta: {
    lang: "pt-BR",
    title: "[Nome da marca] — [promessa em até 60 caracteres]",
    description: "[Descrição para o Google em até 155 caracteres: o que a empresa faz, para quem e o resultado.]",
  },

  ui: { skip: "Pular para o conteúdo", external: "(abre em nova aba)" },

  announcement: {
    enabled: true,
    text: "[Novidade ou oferta com prazo, até 60 caracteres. Ex.: Oferta de lançamento até 31/10.]",
    link: { label: "[Ver condições]", href: "#" },
    cta: { label: "[Ação curta]", href: "#cta" },
  },

  header: {
    brand: "[marca]",
    brandHref: "/",
    links: [
      { label: "[Link 1]", href: "#pilares" },
      { label: "[Link 2]", href: "#ofertas" },
      { label: "[Link 3]", href: "#como-funciona" },
      { label: "[Link 4]", href: "#para-quem" },
      { label: "[Link 5]", href: "#novidades" },
    ],
    secondary: { label: "[Entrar]", href: "#" },
    primary: { label: "[Começar]", href: "#cta" },
    sticky: false,
    menuLabel: "Abrir menu",
    closeLabel: "Fechar menu",
  },

  hero: {
    enabled: true,
    id: "inicio",
    variant: "calm",
    label: "[rótulo curto · para quem]",
    title: "[Promessa principal em até 8 palavras]",
    lead: "[Lead de 1–2 frases (até 160 caracteres): o que a empresa faz, para quem e o resultado. Tom direto, sem jargão.]",
    primary: { label: "[Ação principal]", href: "#cta" },
    secondary: { label: "[Ação secundária]", href: "#como-funciona" },
    media: { kind: "placeholder", tone: "dark", label: "[vídeo ou foto 16:9 · mín. 2400px · fundo escuro para texto branco]" },
    announcement: {
      label: "Anúncio",
      text: "[Novidade em uma frase de até 70 caracteres]",
      href: "#novidades",
      media: { kind: "placeholder", ratio: "1/1", label: "[1:1]" },
    },
  },

  order: [
    "logos",
    "statement",
    "pillars",
    "offers",
    "tabs",
    "proof",
    "timeline",
    "library",
    "spotlight",
    "audience",
    "news",
    "finalCta",
  ],

  logos: {
    enabled: true,
    id: "logos",
    mode: "logos",
    intro: "[Frase curta de prova: quem já confia. Ex.: Usado por equipes de…]",
    items: Array.from({ length: 8 }, (_, i) => ({ name: `[logo ${i + 1}]` })),
  },

  statement: {
    enabled: true,
    id: "problema",
    style: "shout",
    lines: ["[A dor do cliente,", "em uma frase.]"],
    note: "[Frase pequena que vira a chave: o que a empresa faz com essa dor. Até 80 caracteres.]",
  },

  pillars: {
    enabled: true,
    id: "pilares",
    items: [
      { icon: "monitor", title: "[Pilar 1]", text: "[O que o produto faz neste pilar, em 2 frases. Até 140 caracteres.]" },
      { icon: "act", title: "[Pilar 2]", text: "[O que o produto faz neste pilar, em 2 frases. Até 140 caracteres.]" },
      { icon: "surface", title: "[Pilar 3]", text: "[O que o produto faz neste pilar, em 2 frases. Até 140 caracteres.]" },
    ],
  },

  offers: {
    enabled: true,
    id: "ofertas",
    mode: "products",
    title: "[Título da seção de ofertas em duas linhas: o que você vende, em uma frase]",
    items: [1, 2, 3].map((n) => ({
      name: `[Oferta ${n}]`,
      media: { kind: "placeholder" as const, ratio: "16/9", label: "[foto 16:9 · mín. 1600px]" },
      phrase: "[Frase de produto: o resultado que esta oferta entrega, até 90 caracteres.]",
      text: "[Texto de apoio: para quem é, o que inclui e como funciona. Até 200 caracteres.]",
      ctas: [
        { label: "[Ação]", href: "#cta", variant: "primary" as const },
        { label: "[Saiba mais]", href: "#", variant: "secondary" as const },
      ],
      meta: "[Meta: prova curta ou condição. Ex.: sem cartão, cancela quando quiser.]",
    })),
  },

  tabs: {
    enabled: true,
    id: "como-funciona",
    intervalMs: 6000,
    pauseLabel: "Pausar troca automática",
    playLabel: "Retomar troca automática",
    groups: [1, 2, 3].map((g) => ({
      name: `[Grupo ${g}]`,
      tabs: [1, 2, 3, 4].map((t) => ({
        title: `[Aba ${g}.${t}: recurso]`,
        text: "[Uma frase sobre este recurso, até 110 caracteres.]",
        media: { kind: "placeholder" as const, ratio: "16/10", label: `[imagem ou vídeo 16:10 · aba ${g}.${t}]` },
      })),
    })),
  },

  proof: {
    enabled: true,
    id: "prova",
    field: 1,
    title: "[Prova em duas linhas curtas.]",
    text: "[Uma frase que explica os números abaixo e de onde vêm. Até 160 caracteres.]",
    cards: [
      {
        tag: "[produto 1]", value: 120, caption: "[o que o número mede]", spark: [2, 3, 3, 4, 4, 5, 7, 9],
        note: "[Ação recente que gerou o número, até 80 caracteres]",
        stats: [{ label: "[métrica]", value: "[00]" }, { label: "[métrica]", value: "[00]" }, { label: "[métrica]", value: "[00]" }],
        status: "[status ao vivo]",
      },
      {
        tag: "[produto 2]", value: 385, caption: "[o que o número mede]", spark: [3, 3, 4, 5, 5, 6, 6, 8],
        note: "[Ação recente que gerou o número, até 80 caracteres]",
        stats: [{ label: "[métrica]", value: "[00]" }, { label: "[métrica]", value: "[00]" }, { label: "[métrica]", value: "[00]" }],
        status: "[status ao vivo]",
      },
      {
        tag: "[produto 3]", value: 3, prefix: "$", suffix: "K", caption: "[o que o número mede]", spark: [1, 2, 2, 3, 3, 3, 4, 7],
        note: "[Ação recente que gerou o número, até 80 caracteres]",
        stats: [{ label: "[métrica]", value: "[00]" }, { label: "[métrica]", value: "[00]" }, { label: "[métrica]", value: "[00]" }],
        status: "[status ao vivo]",
      },
    ],
  },

  timeline: {
    enabled: true,
    id: "atividade",
    field: 2,
    titleStart: "[Começo da frase]",
    titleEnd: "[que fecha embaixo.]",
    items: [
      { time: "03:08", tag: "[tipo]", tone: 1, title: "[O que foi feito, até 50 caracteres]", text: "[Detalhe em uma frase, até 90 caracteres.]" },
      { time: "04:33", tag: "[tipo]", tone: 2, title: "[O que foi feito, até 50 caracteres]", text: "[Detalhe em uma frase, até 90 caracteres.]" },
      { time: "06:12", tag: "[tipo]", tone: 3, title: "[O que foi feito, até 50 caracteres]", text: "[Detalhe em uma frase, até 90 caracteres.]" },
      { time: "07:45", tag: "[tipo]", tone: 1, title: "[O que foi feito, até 50 caracteres]", text: "[Detalhe em uma frase, até 90 caracteres.]" },
    ],
  },

  library: {
    enabled: true,
    id: "biblioteca",
    field: 3,
    title: "[Serviços empacotados, prontos para usar.]",
    text: "[Uma frase sobre a biblioteca: o que cada card é e como o cliente usa. Até 180 caracteres.]",
    prevLabel: "Anterior",
    nextLabel: "Próximo",
    items: [1, 2, 3, 4, 5, 6].map((n) => ({
      brand: "[marca]",
      title: `[Nome do pacote ${n}]`,
      author: "[por quem]",
      text: "[O que este pacote faz, para quem e o resultado, em até 160 caracteres.]",
    })),
  },

  spotlight: {
    enabled: true,
    id: "destaque",
    label: "[Rótulo do destaque]",
    text: "[Parágrafo grande com a visão ou o diferencial da empresa, em 2–3 frases. Até 260 caracteres.]",
    cta: { label: "[Saiba mais]", href: "#" },
    media: { kind: "gradient", label: "[foto borrada ou vídeo lento · 16:9]" },
    items: [1, 2, 3].map((n) => ({
      title: `[Item ${n}]`,
      text: "[Uma frase sobre este item, até 110 caracteres.]",
      href: "#",
    })),
  },

  audience: {
    enabled: true,
    id: "para-quem",
    tag: "[Para quem é?]",
    title: "[Título calmo: para quem a empresa trabalha.]",
    items: [
      {
        name: "[Segmento 1]", short: "[Promessa curta para este segmento.]",
        points: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]", "[Benefício 4]"],
        primary: { label: "[Ação]", href: "#cta" }, secondary: { label: "[Falar com a gente]", href: "#" },
      },
      { name: "[Segmento 2]", short: "[Promessa curta para este segmento.]", points: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]"], primary: { label: "[Ação]", href: "#cta" } },
      { name: "[Segmento 3]", short: "[Promessa curta para este segmento.]", points: ["[Benefício 1]", "[Benefício 2]", "[Benefício 3]"], primary: { label: "[Ação]", href: "#cta" } },
    ],
  },

  news: {
    enabled: true,
    id: "novidades",
    title: "[Novidades e casos]",
    more: "[Saiba mais]",
    items: [1, 2, 3, 4].map((n) => ({
      title: `[Título da novidade ${n}, até 50 caracteres]`,
      text: "[Resumo em uma ou duas frases, até 160 caracteres.]",
      href: "#",
      media: { kind: "placeholder" as const, ratio: "19/10", label: "[foto 1.9:1 · mín. 1200px]" },
    })),
  },

  finalCta: {
    enabled: true,
    id: "cta",
    style: "shout",
    title: "[Chamada final em até 5 palavras.]",
    text: "[Uma frase que diz o que acontece depois do clique. Até 100 caracteres.]",
    inputLabel: "[Seu e-mail]",
    inputType: "email",
    placeholder: "[voce@empresa.com]",
    button: "[Começar]",
    microcopy: "[Microcopy que tira atrito · ex.: sem cartão · resposta em 1 dia]",
    errorEmpty: "Preencha este campo.",
    errorInvalid: "Confira o formato: parece que falta alguma coisa.",
    success: "[Mensagem de sucesso: o que acontece agora e em quanto tempo.]",
  },

  footer: {
    brand: "[marca]",
    tagline: "[Frase da marca em uma linha, até 70 caracteres.]",
    contact: { label: "[Fale com a gente]", href: "#" },
    ask: {
      title: "[Quer a versão curta?]",
      text: "[Peça a uma IA um resumo da empresa. Uma frase, até 120 caracteres.]",
      items: [
        { label: "ChatGPT", href: "#" },
        { label: "Claude", href: "#" },
        { label: "Perplexity", href: "#" },
      ],
    },
    columns: [1, 2, 3, 4].map((c) => ({
      title: `[Coluna ${c}]`,
      links: [1, 2, 3, 4].map((l) => ({ label: `[Link ${c}.${l}]`, href: "#" })),
    })),
    legal: "© 2026 [Razão social]",
    legalLinks: [
      { label: "[Privacidade]", href: "#" },
      { label: "[Termos]", href: "#" },
    ],
    social: [
      { label: "X", href: "#", icon: "x" },
      { label: "Instagram", href: "#", icon: "instagram" },
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "YouTube", href: "#", icon: "youtube" },
    ],
  },
};
