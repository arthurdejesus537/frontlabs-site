# REVISAR — Front Labs (rodada da noite, 12/10/2026)

O que o Pedro precisa conferir de manhã. Todo `[CONFIRMAR]` visível no site está listado aqui.
Para ver: `cd ~/Documents/FrontLabs-Site/frontlabs && npm run dev -- -p 3011` → http://localhost:3011
(durante a noite as portas 3010–3019 estavam ocupadas por outros projetos seus — a 3011 era o `oaks-event-center`; testei na 3111).

## 1. [CONFIRMAR] — fatos que precisam de fonte

| Onde | O que está no site | Pergunta |
|---|---|---|
| Barra de oferta (topo) | **desligada na rodada 2** (`announcement.enabled: false`); o texto "[CONFIRMAR]" continua no content | Qual é a oferta de lançamento? Se existir, é só religar |
| Perguntas · card do Arch | `archielewis49@gmail.com` + "[CONFIRMAR e-mail público]" | É o e-mail público? (também usado em "Email Arch" no rodapé) |
| Botões "Book a 15-minute call" (nav, /pricing, rodapé) | abrem e-mail para o Arch | Qual o link da agenda (Cal.com/Calendly)? Trocar `CALL_HREF` em `content/site.ts` |
| Rodapé · "Want the short version?" | pergunta pronta citando `frontlabs.co` | O domínio é mesmo frontlabs.co? (inferido de `preview.frontlabs.co` no briefing) |
| Formulário final | só pede o site atual, sem backend | Como a Front Labs vai falar com quem enviou? Hoje não há campo de e-mail/telefone nem envio. Sugestão: adicionar e-mail e ligar num Formspree/Resend |

## 2. Decisões tomadas sozinho

| Decisão | Por quê |
|---|---|
| Símbolo `|/` do logo desenhado em SVG na mão (barra reta + barra inclinada) | O kit da marca (`logo/` com o SVG) não está nesta pasta. Trocar pelo SVG oficial: `components/ui/Logo.tsx` |
| Horizonte 16:9 gerado reamostrando o 4:5 (1200×1500 → 2400×1350), sem corte | Cortar perdia o céu ou a grama; reamostrar mantém todas as cores. O grão do arquivo fica um pouco achatado; por cima vai o `grao.png` |
| Campos de cor (`--c-field-*`) viram branco/cinza | DESIGN §4.2: campos são "legado, em aberto" e a interface é preto e branco; a cor da página fica no Horizonte (barra, "Um dia handled" e chamada final) |
| Nenhuma foto em moldura | FRONTLABS-HOME §1 permite no máximo uma, "só se ajudar". Os momentos visuais já são o herói borrado, o Horizonte e os cards de preview; uma foto a mais disputaria atenção. Se quiser, a `foto-cadeiras.jpg` cabe numa seção "Foto em moldura" (DESIGN §9.6) |
| Ordem: tipos de negócio → frase → pilares → como funciona → o que vem → semana "handled" → para quem → preço → perguntas → CTA | Exatamente a ordem do FRONTLABS-HOME §2 |
| Copy das seções sem fonte de fatos (pilares, abas, timeline, segmentos, FAQ) | Escrita só com fatos do §4 (preview grátis antes, call de 15 min, código para o Google, sem mensalidade/hospedagem, site no nome do cliente, Launch/Signature/Front Cinematic). Nenhum número, prazo ou cliente |
| Timeline marcada `/example week · illustrative` | Os horários e eventos são ilustrativos (pedido do briefing) |
| "Signature" com o selo "everything handled" | Não usei "most popular" (seria um fato sem fonte) |
| FAQ com 5 perguntas, todas com veredito | Uma 6ª ("e se eu precisar mudar algo depois, no Launch?") ficou de fora: não há regra de alterações para o Launch no briefing |
| Nav vira menu de celular abaixo de 1100px (não 1024) | A pílula com 4 links + 2 botões não cabe entre 1024 e 1100 |
| Nome do segmento em "Para quem" em 30px (Destaque) | Em 48px quebrava em 3 linhas |
| Botão de pausa das abas logo abaixo da lista, lista no topo | Na Runway a lista fica centralizada; aqui abria um vazio > 12% (DESIGN §10.1) |

## 3. Diferenças em relação ao DESIGN.md

| DESIGN.md diz | No site | Por quê |
|---|---|---|
| `--soft` #9A9792 na frase de destaque (preto + soft, §9.3) | `#8A8782` | #9A9792 sobre #F4F3F1 dá 2.6:1 e não passa AA nem para texto grande (3:1). #8A8782 dá 3.2:1 e quase não muda o tom |
| Grão em overlay ~60% + multiply ~22% (§4.3) | só overlay a 22% (`--grain-opacity`) | Com o `grao.png` do kit, 60% apagava o texto e virava chiado de TV. A camada multiply ficava escondida atrás da imagem de fundo; tirei |
| "Uma cor por título" (§3.2) / frase de destaque em duas cores (§9.3) | segui o §9.3 na frase de destaque | São regras que se contradizem; o §9.3 é específico para essa frase |
| Navegação "pill flutuante, altura 36–44" (§6.5) | pílula de 52px com botões de 36px | Com botões de 36 dentro, a pílula precisa de respiro; 52 = botão + 8px em cima e embaixo |
| Rótulo mono 13 "começa com `/`" (§3.1) | todos começam com `/`, exceto as etiquetas pill ("Who it's for") | A etiqueta escura de "Para quem" é o padrão Ploy do default |
| Botão "Link: texto + seta →" (§6.1) | os links secundários (ex.: "Book a 15-minute call" em Para quem) são sublinhados, sem seta | Vem do botão `link` do default; vale decidir se o default passa a ter a seta |

## 4. Vale devolver ao default?

| Componente / mudança | Recomendação |
|---|---|
| `Steps` (cards de passo com imagem do momento, §6.8) | **Sim.** É o "como funciona" que o default não tem; generalizar o `Visual` para aceitar qualquer mídia |
| `Faq` (duas colunas, card de contato, veredito) | **Sim.** Toda empresa de serviço precisa de FAQ; o card de contato pode ser opcional |
| Nav em pílula (Header da Front Labs) | **Sim, como variante** (`header.variant: "bar" \| "pill"`) |
| `Logo` com símbolo + nome | Não (é da marca); o default continua com o nome em texto |
| `styles/brand.css` (grão e câmera lenta por seletor) | Talvez: o grão poderia virar token `--grain` opcional no default |
| Tokens já devolvidos nesta rodada | `--w-card`, `--w-label`, `--label-case`, `--text-fvs`/`--title-fvs`, `--frame-gutter`, `--bar-bg`, `--stage-bg`, `--t-feature`, `--turn-*`, cores sobre mídia; `minmax(0, 1fr)` em todos os grids |

## 5. Revisão externa (Fase 7) — o que foi feito com cada apontamento

Relatório completo do revisor (subagente sem contexto): `qa/frontlabs/revisao-externa.md`.

| # | Apontamento | O que fiz |
|---|---|---|
| 1 | Foco invisível no rodapé escuro e sobre foto | **Corrigido** (default e Front Labs): anel escuro + halo branco de 5px (`--c-focus-halo`) |
| 2 | Lead do herói abaixo de AA no celular | **Corrigido**: lead sem transparência, véu mais forte no celular. Medido com `tools/contrast-media.mjs`: 5.7:1 no pixel 90% mais claro |
| 3 | Textos sobre o Horizonte abaixo de AA | **Corrigido**: Horizonte a 72% de brilho atrás de texto (`--horizon-dim`) e véu de 28% na barra. Todos ≥ 4.5:1 (texto pequeno) / 3:1 (grande); a virada do CTA no celular fica em 4.49 no pixel mais claro e 5.66 na média |
| 4 | Vazio entre seções > 12% | **Ajustado**: padding de seção 72 (144 entre seções = "entre seções grandes" do §5.1) e 52 no celular (104 < 12% de 844). No desktop 144 > 108: mantive porque o próprio DESIGN pede 144 entre seções; a regra dos 12% vale para blocos dentro da seção (gap-audit limpo) |
| 5 | Rótulos fora da Geist Mono | **Corrigido**: "/who it's for" e as tags da timeline em mono 400 |
| 6 | Peso 500 | **Corrigido**: `--w-medium` = 550 (o sistema só tem 400/550) |
| 7 | Virada com tracking apertado | **Corrigido** (os dois apps): tracking em em no próprio tamanho |
| 8 | Cards de "Para quem" sem raio e com bolinhas | **Corrigido**: raio 10, sem bolinhas |
| 9 | Botão da barra com 28px | **Corrigido**: 36 (`--bar-btn-h`) |
| 10 | aria-labels em português | **Corrigido**: todos vêm de `site.ui` (inglês na Front Labs) |
| 11 | "Book a 15-minute call" levava ao formulário | **Corrigido provisoriamente**: abre e-mail para o Arch com assunto "15-minute call". `[CONFIRMAR]` link da agenda |
| 12 | Promessas sem fonte | **Corrigido**: "We handle it" agora diz que o care é do Signature; "always right" saiu; Launch sem "everything you need to be found"; timeline marcada "with Signature" e cada item aponta o recurso |
| 13 | Nicho em venue | **Corrigido**: venues por último em "Para quem" e no fim da faixa, todos os segmentos com o mesmo botão; FAQ 05 virou "Is this only for wedding venues? — No." |
| 14 | Tamanhos fora da escala (20px/550, 30px, "Oct" 11px) | **Mantido**: 20px é o "subtítulo" do default; nomes em 30 = Destaque (agora em 400, como "nome sobre campo"); "Oct" é um rótulo de 11px dentro de um quadrado de 52px |
| 15 | Frase de destaque com opsz de texto | **Corrigido**: tamanho ótico de título |
| 16 | `--soft` no celular (22px) | **Corrigido**: no celular vira `--mute` (4.9:1) |
| 17–18 | Ícones dos pilares e raio do card | **Corrigido**: círculos de 44, card raio 24, título 72px abaixo do ícone |
| 19 | Pílula do nav 52px | **Corrigido**: 44px |
| 20 | Botão do formulário 44px | **Corrigido**: 52 (`--form-h`) |
| 21 | Selo preenchido | **Corrigido**: contornado |
| 22 | Pills "Ask AI" com fundo translúcido | **Corrigido**: só contorno |
| 23 | Seta antes do texto no rodapé | **Mantido**: padrão "→ Contact us" da Ploy no componente do default. Decidir se vira seta depois |
| 24 | Erro em vermelho | **Mantido**: mensagem de erro precisa se distinguir (acessibilidade); é o único vermelho e só aparece no erro |
| 25 | Rodapé alto | **Mantido** (padrão Ploy); dá para tirar o bloco "Want the short version?" se pesar |
| 26 | Foto do herói ainda legível | **Corrigido**: desfoque de 14px por cima |
| 27 | Fundos com `role="img"` vazio | **Corrigido**: fundo sem `alt` fica `aria-hidden` |
| 28 | Faixa rolante sem pausa | **Corrigido** (os dois apps): botão de pausa; para também no foco |
| 29 | Detalhes sem fonte ("video call", "No card", "checked before launch", "Tap-to-call") | **Corrigido**: trocados por texto neutro |
| 30 | `frontlabs.co` no prompt da IA | **Corrigido**: o prompt não cita domínio |
| 31 | "You see it first, / then decide." em dois tons | **Mantido**: é a "virada" do §3.2 (segunda linha menor, cor secundária), permitida |


---

# Rodada 2 (12/10/2026) — nova home (Ploy + Runway) e páginas de verdade

Prompt: `PROMPT_RODADA2.md`. Ver: `cd frontlabs && npm run dev -- -p 3011` → `/`, `/how-it-works`, `/what-you-get`, `/pricing`, `/questions` (e qualquer rota inexistente para o 404). Screenshots finais em `qa/frontlabs-r2/`.

## R2.1 Preços (saíram do [CONFIRMAR])
Fonte: apresentação da oferta (10/10/2026), passada no prompt da rodada 2.
- **Launch $600** = 2 × $300 (metade ao aprovar o preview, metade no lançamento).
- **Signature $999** = 3 × $333 (na aprovação, no lançamento e 30 dias depois). Selo "Everything handled" (não "Most chosen": não é um fato que temos).
- **Front Cinematic +$197** para o Launch (incluso no Signature).
- Sem mensalidade; depois dos 6 meses o site continua no ar e é do cliente.

## R2.2 Copy provisória por seção (toda em inglês, toda trocável em `content/site.ts`)
| Onde | Copy provisória |
|---|---|
| Herói (`heroFilm`) | "Your website should work as hard as you do." / "We build it, launch it and handle it. You go run your business." |
| Linha que preenche (`scrollFill`) | "Most local websites launch. Then they stop working." / "Front Labs keeps yours working." |
| Pilares | "What a local business needs online." / "Four things. We handle all of them." — Found · Loved · Working · Booked |
| Cards ao vivo (`liveCards`) | "Running while you work." + frase à direita |
| Resultados (`results`) | "What changes when it's handled." / "Less chasing. More booked." — 6 benefícios, cada um com o produto |
| Abas (`tabs`) | "What we do at every step." — Code · Design · Booking · Launch · Care (constante `STEPS`, reaproveitada em /how-it-works) |
| Preço (home) | "Pay once. No monthly fee." + "See full pricing" |
| Páginas | heróis "Pay once. Keep it forever." (/pricing), "Every step, handled." (/how-it-works), "Everything in the box." (/what-you-get), "Straight answers." (/questions), "This page isn't here." (404) |
| FAQ de preço | 5 perguntas novas ("What happens after the 6 months of care?" etc.), só com os fatos acima |

## R2.3 Dados ilustrativos (cards ao vivo)
`site.liveCards.illustrative = true` → rótulo "/example · illustrative numbers" no topo da seção. **Todos os números e mensagens são inventados como exemplo** (3 previews, 12 visitas, 8 pedidos de review, mini-stats, "plumbing company in Houston"…). Para trocar por dados reais: o componente `LiveCards` só recebe `cards: LiveCard[]`; basta montar esse array a partir de uma fonte real e pôr `illustrative: false`.

## R2.4 Decisões tomadas sozinho
| Decisão | Por quê |
|---|---|
| Log dos cards troca a cada **4s** (não 5s) | Medido na Ploy: ~4s com fade de 0.4s (`qa/refs/ploy-r2/MEDIDAS.md`) |
| Herói: sem vídeo, imagem borrada com câmera lenta; botão play/pause só aparece com vídeo | O prompt pede `video: null` por enquanto. Para pôr vídeo: `heroFilm.video = { src, poster }` |
| Moldura do herói a 24px das bordas (Ploy: 32) | DESIGN §9: "24px de respiro" |
| Abas: lista no topo (Runway centraliza) | Centralizada abria vazio > 12% entre o título e a 1ª etapa; mesma decisão da rodada 1 |
| Abas: a troca automática acontece no fim da barra de progresso | Uma fonte de verdade: a barra pausa quando a seção sai da tela e a troca acompanha |
| /how-it-works: texto e palco em 50/50 (não 5/7) | Com 7/12 o palco passava de 60% da janela e o auditor de vazio o tratava como fundo; 50/50 também fica mais calmo |
| /pricing: tabela compara Launch × Signature; Front Cinematic aparece como linha (+$197 / ✓) | É um add-on, não um plano |
| Bloco "How payment works" em cinza `#E9E8E5` (token `--c-panel-grey`) | Clone do cinza da Ploy (#E5E5E5) ajustado ao fundo #F4F3F1; o DESIGN não tem esse cinza → anotar se vale entrar no §4.1 |
| `/questions` junta as perguntas da home + preço + "após o care" | Página de FAQ completo |
| Todas as páginas terminam no formulário (`#cta`) | Assim "Get my free preview" funciona em qualquer página sem sair dela |
| Nav e rodapé foram para o `app/layout.tsx` | São iguais em todas as páginas; o nav marca a atual com `aria-current="page"` (sublinhado) |
| Fundos borrados novos `foto-noiva-borrada.jpg` e `foto-cadeiras-borrada.jpg` | Receita do DESIGN §4.2.2 com blur mais forte (rostos irreconhecíveis) |

## R2.5 O que ficou para o Pedro decidir
1. **Copy**: toda provisória (R2.2).
2. **Dados dos cards ao vivo**: hoje ilustrativos (R2.3). Manter como exemplo, trocar por dados reais, ou tirar a seção.
3. **Vídeo do herói**: quando existir, preencher `heroFilm.video`.
4. Link da agenda (`CALL_HREF`) e e-mail público do Arch continuam `[CONFIRMAR]` (§1).

## R2.6 Vale devolver ao default? (§4, rodada 2)
| Componente | Recomendação |
|---|---|
| `ScrollFill` | **Sim.** Genérico (texto do content), sem dependência de marca |
| `Odometer` + `LiveCards` | **Sim**: é o `ProofField` do default com odômetro, log em rodízio e dados por props; trocar o Horizonte por `--c-field-*` no default |
| `HeroFilm` | **Sim, como variante** do herói (`variant: "film"`), aceita vídeo ou imagem |
| `Stage` | **Sim**: palco com fundo + visual em HTML; no default o fundo seria `--c-placeholder` |
| `PageHero`, `PlanCard`, `CompareTable`, `PaymentBlock`, `FeatureRow`, `ArrowList` | **Sim**: estrutura de página de preço/feature que toda empresa de serviço usa |
| `Results` | Talvez: é o "Audience" da Ploy simplificado; útil como "benefícios" |
| Abas com barra de progresso e acordeão no celular | **Sim**: melhora direta do `FeatureTabs` do default |
| Rotas de página no default | Sim: o default hoje é só a home; vale ter `/pricing` e uma página de feature como modelo |
