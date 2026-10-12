# FRONTLABS-HOME.md — briefing da versão Front Labs

O site da própria Front Labs, feito a partir do default (`default/`) e vestido com o `docs/DESIGN.md`.
**Público:** donos de negócios locais nos EUA, em geral. Wedding venue é onde a Front Labs começou, mas **a home não pode ser nichada em venues**: ela fala com qualquer negócio local que vive de ser encontrado e agendado (venues, pool builders, encanadores, clínicas, estúdios, restaurantes, serviços em casa…).
**Idioma do site:** inglês americano. **Idioma dos documentos e do resumo:** português.

---

## 1. O que muda em relação ao DESIGN.md

O DESIGN.md foi escrito com venues em mente. Para esta home valem estes ajustes, e só estes:

| DESIGN.md diz | Nesta home |
|---|---|
| Rótulo do herói `/for wedding venues` | `/for local businesses` |
| Produto "Site Journel v1, $600" | Os dois planos atuais, **Launch** e **Signature** (§4). "Site Journel" não aparece |
| Card de preview com dados reais de um venue | O card mostra o **site do próprio visitante** de forma ilustrativa: URL `preview.frontlabs.co/your-business`, nome "Your Business", blocos genéricos (`/calls` Book a visit, `/hours` Open today, `/reviews` On Google). Nunca inventar um cliente, nunca usar o Bella Terra (sem autorização) |
| Fundo borrado do venue (Bella Terra) | `assets/foto-borrada-hero.jpg` (foto nossa, gerada por IA) |
| Foto no site: "talvez" | No máximo **uma** foto em moldura (`assets/foto-cadeiras.jpg` ou `foto-noiva-notebook.jpg`), e só se ajudar. No resto, gradiente Horizonte + card de preview |

Tudo o mais segue o DESIGN.md: Inter 550, Geist Mono nos rótulos, Bricolage só no nome, `#F4F3F1`, botões pill preto e branco 52/44/36, raio 24, Horizonte como único gradiente, grão, sem vidro, sem serifada, sem texto em gradiente, sem o "grito" condensado da Ploy, regra dos 12% de vazio.

## 2. Ordem da home

Montar a partir dos componentes do default (mesma estrutura de `content/site.ts`), trocando tokens e conteúdo. Seção que o default tem e esta lista não usa fica com `enabled: false`.

| # | Seção (componente do default) | Conteúdo |
|---|---|---|
| 0 | Barra de oferta (`AnnouncementBar`) | Horizonte, texto branco 14px, botão contornado pequeno. Texto: oferta de lançamento `[CONFIRMAR]` |
| 1 | Nav (`Header`) | pill branca sticky: logo, links (How it works · What you get · Pricing · Questions), "Book a 15-minute call" (cinza 36) + "Get my free preview" (preto 36) |
| 2 | Herói (`Hero`) | moldura raio 24 com fundo borrado em drift; `/for local businesses`; **Online stuff, handled.** / virada **Go run your business.**; lead; botão branco "Get my free preview" + contorno branco "See how it works"; card de preview à direita |
| 3 | Faixa de tipos de negócio (`LogoStrip`) | no lugar de logos de clientes (que ainda não podemos mostrar): marquee em mono com os tipos de negócio atendidos. Frase acima: "Built for the businesses your town runs on" |
| 4 | Frase de destaque (`Statement`, estilo calmo) | uma frase grande de 30–34px, preto + `--soft` em 7 colunas (DESIGN.md §9.3) |
| 5 | Pilares (`Pillars`) | 3 colunas no card branco (padrão Ploy Monitor/Act/Surface): We build it / We launch it / We handle it |
| 6 | Como funciona (`Offers` ou componente de passos) | 3 cards de passo do DESIGN.md §6.8 (preview → call de 15 min → no ar) |
| 7 | O que vem no site (`FeatureTabs`) | painel de abas da Runway; cada aba com um visual feito em HTML/CSS no estilo do card de preview |
| 8 | Um dia "handled" (`Timeline`) | padrão "An employee that never sleeps" da Ploy, sobre o Horizonte ou fundo borrado: cards com horário mostrando o que a Front Labs cuida. Rótulo `/example week` deixa claro que é ilustrativo. Sem números inventados |
| 9 | Para quem (`Audience`) | etiqueta + título à esquerda, cards empilhados à direita (padrão Ploy): Wedding & event venues · Home services · Studios & clinics · Restaurants & shops |
| 10 | Preço (`Offers` em modo preço) | dois cards: Launch e Signature (§4) |
| 11 | Perguntas (`Faq`) | DESIGN.md §6.9: card do Arch + 4–6 perguntas com pílula de veredito |
| 12 | Chamada final (`FinalCta`) | Horizonte; título "See your new site before you pay a thing."; virada "Fire your web designer. Politely."; formulário com o site atual (sem backend: validação + mensagem de sucesso) |
| 13 | Rodapé (`Footer`) | logo, "Online stuff, handled.", colunas curtas, contato, linha legal. Pode ter o "Want the short version? Ask AI" da Ploy |

Desligadas por padrão: `ProofField` (cards de número: não temos números reais), `Library`, `News`, `Spotlight`. Se uma delas fizer falta, ligar com conteúdo verdadeiro e anotar no REVISAR.md.

## 3. Regras de copy

- Frases curtas, concretas, sem clichê de agência ("elevate", "unleash", "stunning", "cutting-edge", "dream", "seamless").
- Tom: fundador falando com dono de negócio. Seco, confiante, um pouco de humor ("Fire your web designer. Politely.").
- **Nunca prometer posição no Google.** Pode: "built the right way for Google", "fast on every phone".
- **Nunca inventar** número, cliente, depoimento, prêmio, prazo ou logo. Sem fonte → `[CONFIRMAR]` no `content/site.ts` e uma linha no `REVISAR.md`.
- Linhas que já são da marca (usar): "Online stuff, handled." · "Go run your business." · "Fire your web designer. Politely." · "See your new site before you pay a thing." · "You see it first, then decide."

## 4. Fatos da oferta (o que pode entrar)

Fonte: decisões do Pedro (out/2026). O que está marcado `[CONFIRMAR]` entra assim no site e vai para o REVISAR.md.

- **Free preview first:** a Front Labs refaz o site do negócio antes de qualquer pagamento; o dono vê e decide.
- Call de 15 minutos para mostrar o preview.
- Site com código feito para o Google, design voltado a agendamento/contato, tudo no nome e no domínio do cliente.
- **Sem mensalidade** e sem taxa mensal de hospedagem. O site é do cliente.
- **Launch:** o site novo, sem criativo e sem agendamento automático. Add-on "Front Cinematic" (6 vídeos cinematográficos de IA + color grading de todas as fotos) por US$ 197. Preço do Launch: `[CONFIRMAR]`.
- **Signature:** Launch + Front Cinematic + agendamento automático com resposta automática + pedido automático de avaliação no Google + 6 meses de "care" (revisões e alterações). US$ 999 à vista ou US$ 500 de setup + 6× US$ 99 `[CONFIRMAR qual mostrar]`.
- Contato do Arch (FAQ): `archielewis49@gmail.com` `[CONFIRMAR se é o e-mail público]`.

## 5. Assets disponíveis

`assets/gradiente-horizonte.jpg` (4:5, 1200×1500), `assets/grao.png`, `assets/foto-borrada-hero.jpg`, `assets/foto-cadeiras.jpg`, `assets/foto-noiva-notebook.jpg`. Copiar para `frontlabs/public/img/`. Para seções largas, gerar versões 16:9 do Horizonte cortando/ampliando o 4:5 (sharp ou sips), sem mudar a cor.

## 6. Entregáveis da versão Front Labs

- `frontlabs/` rodando (`npm run dev -- -p 3011`), build e lint sem erro.
- `frontlabs/docs/REVISAR.md`: tudo marcado `[CONFIRMAR]`, decisões tomadas sozinho durante a noite e o que ficou diferente do DESIGN.md (com o porquê).
- Screenshots em `qa/frontlabs/`: 1440, 768 e 390, página inteira + uma por seção.
