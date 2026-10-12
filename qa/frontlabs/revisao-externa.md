# Revisão externa: Front Labs (localhost:3111)

Data: 12/10/2026. Revisor sem contato prévio com o projeto. Base: `docs/DESIGN.md` (v4), `docs/FRONTLABS-HOME.md` e `frontlabs/content/site.ts`.
Método: Playwright (Chromium) em 1440×900 e 390×844, com estilos computados, contraste medido sobre o fundo real (screenshot com o texto transparente, média e percentil 90 dos pixels atrás do texto), percurso por Tab, `tools/qa-check.mjs`, `tools/gap-audit.mjs` e uma varredura própria de faixas vazias na página inteira.
Os marcadores `[CONFIRMAR]` não foram contados como violação.

---

## Grave

1. **O foco do teclado some no rodapé** (1440 e 390). Todos os links e botões do rodapé ("ChatGPT", "Claude", "Perplexity", "How it works", "Pricing"…) usam `outline: 2px solid rgb(10,10,10)` sobre o card do rodapé, que também é `rgb(10,10,10)`. O anel fica invisível; conferido com screenshot do elemento focado (`:focus-visible` = true). No herói ("See how it works"), na barra de oferta e no botão do formulário final, o mesmo anel preto fica sobre a foto ou o gradiente escuro e quase não aparece. Regra: CLAUDE.md §3.12 (foco visível) e WCAG 2.4.7.

2. **O lead do herói não passa em AA no celular** (390). "We rebuild your website before you pay a thing…" está em 18px/400, branco com opacidade 0.92 sobre a foto borrada (a parte de céu claro). Contraste medido: **3.47:1 na média e 2.75:1 no p90**, contra os 4.5:1 exigidos. Em 1440 o mesmo texto dá 6.1:1 (passa). Regra: CLAUDE.md §3.12 (AA) e DESIGN §4.1 (texto com contraste ≥ 4.5).

3. **Textos sobre o gradiente Horizonte abaixo de AA.**
   - Chamada final, "Drop your current website. We'll build your preview first." (17px em 1440, 16px em 390, branco 400): **4.44:1 em 1440 e 3.99:1 em 390** na média; p90 de 3.35 e 3.07.
   - Linha do tempo, rótulo `/example week · illustrative` (Geist Mono 13px, branco): **4.00:1 em 1440 e 3.64:1 em 390**.
   - Barra de oferta (14px em 1440, 13px em 390): "See pricing" dá **4.32:1** em 1440 e o texto principal dá 4.64:1, com p90 de cerca de 3.4.
   - A virada "Fire your web designer. Politely." usa branco 0.78 em 29.8px/550 (1440) e 21px/550 (390). O mínimo para texto grande é 3:1: a média passa (3.59 e 3.11), mas o p90 fica abaixo (2.74 e 2.49).
   - Regra: CLAUDE.md §3.12 e DESIGN §4.2.1 ("sobre ele, cards claros ou texto branco": o branco só funciona se o gradiente for escurecido onde há texto).

---

## Médio

4. **Espaço vazio entre seções acima de 12%** (1440 e 390). O `gap-audit.mjs` só mede dentro de cada seção. A varredura da página inteira acha faixas só de fundo `#F4F3F1` em **todas as transições de seção**: 192–195px em 1440 (21% de 900) e 144–148px em 390 (17% de 844). Exemplos: pilares → passos (y 1567–1762), passos → abas (2430–2625), linha do tempo → para quem (4535–4727), preço → FAQ (6594–6787). Isso vem de `--section-y: 96px` aplicado em cima e embaixo. A regra é a dos 12% que o FRONTLABS-HOME §1 estende à home (DESIGN §10.1). O DESIGN §5.1 também limita "entre seções grandes" a 144 (`space-10`), e 192 passa disso.

5. **Rótulos que não estão em Geist Mono.** A regra (DESIGN §3.1 e §3.2) pede rótulo curto em Geist Mono 400, minúsculo, começando com `/`.
   - A tag "Who it's for" (Para quem) está em Inter 13px/**550**, numa pílula preta, sem `/`. O esperado era `/who it's for` em mono, como os outros rótulos de seção.
   - As tags da linha do tempo (`/booking`, `/reviews`, `/care`, `/photos`) estão em Inter 13px/**550**. Têm `/`, mas a fonte e o peso estão errados.

6. **Peso 500 fora do sistema** (1440 e 390). O DESIGN §3.1 só tem 400 (texto) e 550 (título). Medido:
   - links da navegação ("How it works"…), Inter 15px/**500**;
   - valores dos blocos do card de preview ("Book a visit", "Open today", "Clean"…), Inter 14px/**500**. A anatomia do card no DESIGN §10.2 pede Inter 550;
   - títulos dos cards da linha do tempo ("A booking request gets an answer"), Inter 20px/**500**.

7. **A virada fica apertada demais.** O `letter-spacing` em px é herdado do título e aplicado a um tamanho menor:
   - "Go run your business.": −3.24px em 44.64px = **−0.073em** (a regra é −0.045em);
   - "then decide." e "Fire your web designer. Politely.": −2.16px em 29.76px = −0.073em;
   - em 390: −1.98px em 27.28px e −1.53px em 21.08px, também −0.073em.
   - Na imagem as letras da virada aparecem coladas. Regra: DESIGN §3.1 (Display e Título com −0.045em).

8. **Cards de "Para quem" sem raio e com bolinhas nos cantos** (1440 e 390).
   - `Audience-module__card` tem `border-radius: 0px` (os 4 cards, borda de 1px `#E3E1DD`). É o único bloco grande da página com canto reto. Regra: DESIGN §5.3 (10 para card de interface, 24 para card grande).
   - Os cards fechados têm 4 pontos pretos de 5px nos cantos (`.dots i`, padrão Ploy). O DESIGN não tem esse ornamento e descarta explicitamente as "bolinhas" (§4.2 e §4.7). Regra: §0 ("se não está aqui, não existe no sistema").

9. **O botão da barra de oferta tem 28px de altura** (1440 e 390). "Get my free preview" contornado: 191×28. O menor botão do sistema é 36 (DESIGN §6.1 e §6.6). No celular, a área de toque ampliada por `::after` chega a **38px** (menos que os 44 de CLAUDE.md §3.11). O `qa-check.mjs` não pega o caso porque o critério dele é `h < 44 && w < 44 || h < 40`, e o botão tem 191px de largura.

10. **Rótulos ARIA em português num site `lang="en-US"`.** Medido: `aria-label="FrontLabs, início"` (logo), `"Principal"` (nav), `"Rodapé"` (nav do rodapé), `"Prévia: Your Business"` e `"Prévia: Built the right way for Google"` (cards de preview). O leitor de tela lê esses nomes com pronúncia inglesa. Regra: CLAUDE.md §3.12 (acessibilidade básica) e FRONTLABS-HOME (site em inglês americano).

11. **"Book a 15-minute call" não leva a uma call.** Na nav, no card de venue em "Para quem", no rodapé e no menu mobile, o link vai para `#cta`, que é o formulário de site atual. O `[CONFIRMAR]` está só num comentário do código (`CALL_HREF`) e não aparece para o visitante. O rótulo promete agendar e entrega outra coisa. Regra: FRONTLABS-HOME §3 (não prometer o que não existe).

12. **Promessas sem fonte e sem `[CONFIRMAR]`** (copy, FRONTLABS-HOME §3 e §4):
    - Pilar "We handle it": "Edits, fixes, the online stuff you never get to." Aparece como pilar geral, mas pelo §4 a manutenção (care) só existe no Signature e por 6 meses. O Launch não tem nada disso. A segunda frase ("Signature includes six months of care") não desfaz a promessa da primeira.
    - "Para quem" → Home services: "Service area and hours that are always right". "Always" promete manutenção contínua, que não está em nenhum plano.
    - Preço → Launch: "Everything you need to be found and booked." Encosta na promessa de resultado ("be found") que o §3 proíbe. O texto permitido é "built the right way for Google".
    - Linha do tempo: a "semana tratada" mostra resposta automática, pedido de avaliação, alteração de horário e fotos novas sem dizer que quase tudo é só Signature (e o care só por 6 meses). O rótulo "illustrative" cobre horários e datas, mas não o escopo do plano.

13. **Nicho em venue onde a home devia ser genérica** (FRONTLABS-HOME §0 e §2):
    - "Para quem": o único card aberto por padrão é "Wedding & event venues", e é o único com dois CTAs (primário + "Book a 15-minute call"). Os outros três ficam fechados e só têm o primário.
    - FAQ 05, "I'm not a wedding venue. Is this for me?": a pergunta parte do princípio de que o visitante acha que o site é para venues. Isso reforça o nicho numa home que não devia ter um.
    - Marquee: a lista começa em `/wedding venues`. É leve sozinho, mas soma com os dois itens acima.

---

## Leve

14. **Tamanhos fora da escala** (DESIGN §3.1: 72/48/30/24/20 lead/17/14/13):
    - títulos de 20px em peso 550 (pilares "We build it", nomes dos planos "Launch"/"Signature", perguntas do FAQ). Título de card é 24;
    - abas em 20px/400 com −0.01em;
    - nome dos cards de "Para quem" em 30px/550: é o tamanho do Destaque com peso de título, e não bate com nenhum estilo;
    - "Oct" no convite (Geist Mono 11px, abaixo dos 13 do rótulo).
15. **A frase de destaque usa tamanho ótico de texto.** O Statement ("People look you up…", 30px em 1440 e 22px em 390) sai com `font-variation-settings: "opsz" 14`. O DESIGN §3.1 pede, para o Destaque, "tamanho ótico display".
16. **`--soft` escurecido no Statement continua abaixo de AA no celular.** `#8A8782` sobre `#F4F3F1` dá **3.23:1**. Em 1440 (30px) conta como texto grande e passa. Em 390 o texto tem 22px/400, que não é texto grande (o limite é 24px), então precisaria de 4.5. Regra: CLAUDE.md §3.12.
17. **Ícones dos pilares são quadrados.** Medido: 36×36, raio 10, fundo preto. O DESIGN §6.2 pede círculo de ícone de 44–52, e §5.3 dá 999 para círculos.
18. **Card dos pilares com raio 10.** É um card de 1344×278, card grande, então pede 24 (DESIGN §5.3). Dentro dele há **96px** entre o ícone e o título em 1440 (y 440 → 536) e 48px em 390, um respiro sem função (DESIGN §1.6). O gap-audit dá 106px para esta seção, a 2px do limite.
19. **Pílula da navegação com 52px de altura.** Medido: `Header-module__inner` 1392×52. A regra é 36–44 (DESIGN §6.5).
20. **Botão do formulário final com 44px em 1440.** É o CTA principal da página e pede o tamanho grande de 52 (DESIGN §6.1). Em 390 ele tem 52.
21. **Selo "everything handled" (Signature).** É uma pílula preta preenchida, em mono, sem `/`. O selo do sistema é contornado, na cor do texto ao lado (DESIGN §3.4); se for rótulo, falta o `/`.
22. **Botões "Ask AI" do rodapé.** Têm fundo branco a 8% e borda branca a 14%. Sobre campo escuro, o secundário do sistema é "contorno branco 1px" (DESIGN §6.1), e o branco translúcido lembra o vidro, que está em pausa (§6.3).
23. **Link do rodapé com a seta à esquerda** ("→ Book a 15-minute call"). O padrão é texto + seta "→" depois (DESIGN §6.1).
24. **Mensagem de erro em vermelho** (`#B42318`), na chamada final. O DESIGN §4.5 não deixa cor entrar em texto. Para erro é defensável, mas precisa ser registrado como exceção.
25. **O rodapé é um bloco preto de 763px em 1440** (971 em 390). O DESIGN §9.9 pede só logo e "Online stuff, handled."; a cor entra em uma seção por página (§4.4) e o fundo de seção comum é `--bg` (§4.1). O bloco preto disputa o "momento de impacto" com a chamada final, que vem logo acima (§1.5). Em 1440 há ainda ~119px vazios no topo do card antes da tagline.
26. **A foto borrada do herói ainda se lê como foto.** Dá para ver uma pessoa de chapéu vermelho e as árvores. O DESIGN §4.2.2 pede borrar "até virar mancha de cor".
27. **Dois `role="img"` sem nome acessível.** São os fundos de gradiente da linha do tempo e da chamada final: `aria-label=""` e nenhum `aria-labelledby`. Como são decorativos, deviam ser `aria-hidden` ou não ter `role="img"`.
28. **O marquee de tipos de negócio não tem como pausar.** Ele roda em loop de 50s. Com `prefers-reduced-motion` ele para (conferido), mas sem essa preferência não há controle de pausa (WCAG 2.2.2).
29. **Detalhes de copy sem fonte em §4** (baixo risco):
    - "15 min · video call" (o §4 diz "call de 15 minutos", sem dizer o meio);
    - "No card" no microtexto final (implícito em "free preview", mas não está escrito);
    - "checked before launch" no card de preview das abas (sugere um processo de QA não descrito);
    - "Tap-to-call on every page".
30. **Prompt do "Ask AI" com domínio sem fonte.** Ele cita "Front Labs (frontlabs.co)", e o FRONTLABS-HOME só traz `preview.frontlabs.co` como URL ilustrativa. Além disso, mandar o visitante perguntar a um chatbot sobre uma empresa nova pode trazer resposta inventada ou de outra empresa.
31. **Título dos passos em dois tons na mesma frase.** "You see it first, / then decide." é uma frase só, quebrada na vírgula. O DESIGN §1.2 diz "nunca dois tons na mesma frase", e a virada do §3.2 é uma segunda frase (exemplo da Apple).

---

### Conferido e em ordem
- Sem rolagem horizontal em 1440, 768 e 390.
- Toque ≥ 44 no celular em tudo, menos o botão da barra de oferta (item 9).
- `lang="en-US"`, link "Skip to content", um H1 só, hierarquia H2/H3 coerente.
- `alt=""` nas imagens decorativas.
- `aria-expanded` no FAQ, em "Para quem" e no menu; abas com `aria-selected` e tabindex móvel.
- Formulário com `aria-invalid`, `aria-describedby` e mensagem em `aria-live`.
- `prefers-reduced-motion` desliga todas as animações.
- Herói: deriva de 22s com escala de 1.04 a 1.08 (DESIGN §4.2.2).
- Fontes: Bricolage 800 com `opsz` 96 e −0.05em só no logo; Display 72/1.0/550/−0.045em; Título 48/1.02; mobile 44/34/22.
- Botões: primários, secundários e contornos em pílula 999, com alturas de 52/44/36, exceto os itens 9 e 20.
- Gradiente Horizonte só atrás de conteúdo; sem sombra e sem `backdrop-filter`.
