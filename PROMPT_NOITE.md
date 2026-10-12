# Rodada da noite: default de duas referências + site da Front Labs (rodar sem o Pedro por perto)

O Pedro está dormindo. **NÃO pergunte nada**: decida pelo mais razoável, anote a decisão em `PROGRESSO.md` e siga. Fale em português no resumo final.

Leia antes, por completo: `CLAUDE.md`, `docs/MESTRE-DEFAULT.md`, `docs/referencias/SITE-MESTRE-RUNWAY.md`, `docs/referencias/SITE-MESTRE-PLOY.md`. Olhe também os screenshots `docs/referencias/*-full.png`.
Antes de cada fase, leia `PROGRESSO.md` e continue de onde parou (se a sessão cair, é só rodar este prompt de novo). Ao fim de cada fase: build + lint, commit, e uma linha em `PROGRESSO.md` (fase, o que saiu, decisões, problemas).

**Meta de amanhã cedo:** `default/` pronto e fiel às duas referências (tag `v1.0-default`) e `frontlabs/` pronto com o DESIGN.md e a home para negócios locais (tag `v1.0-frontlabs`), com screenshots e um `REVISAR.md`.
**Qualidade > velocidade**, mas não trave: se algo emperrar por mais de ~30 min, simplifique, anote e siga.

Regras duras: nunca inventar fato da Front Labs; não copiar logos, fotos, textos nem fontes pagas das referências; não mexer fora desta pasta; não fazer push; não instalar nada global além do Chromium do Playwright.

---

## Fase 0 — Setup (sem design ainda)

1. `git init` na raiz `FrontLabs-Site` (se ainda não existir), com `.gitignore` ignorando `node_modules`, `.next`, `*.tsbuildinfo` e `.DS_Store` (os screenshots de `qa/` entram no git). Commit `docs: pacote inicial`.
2. Ferramentas em `tools/` (com `package.json` próprio): `npm i -D playwright` e `npx playwright install chromium`. Crie:
   - `tools/shoot.mjs <url> <pasta> [larguras]`: abre a URL, rola até o fim para carregar tudo, volta ao topo, salva página inteira e a primeira dobra em cada largura (padrão 1440, 768, 390).
   - `tools/measure.mjs <url> <saida.json>`: estilos computados de títulos, parágrafos, botões, seções e elementos com raio (mesma lógica dos `docs/referencias/*-1440.json`).
   - `tools/sections.mjs <url> <pasta>`: um screenshot por seção (cada `section`/bloco principal com mais de 150px de altura), numerado na ordem da página.
   - `tools/gap-audit.mjs <url>`: mede o maior vazio vertical entre blocos de conteúdo de cada seção e aponta o que passar de 12% da altura da janela (regra do DESIGN.md §10.1, adaptada para web).
   Se o Playwright MCP estiver conectado (`/mcp`), pode usá-lo também para inspeções pontuais.
3. Rode `tools/sections.mjs` em https://runway.com/ e https://ploy.ai/ (1440 e 390) → `qa/refs/runway/` e `qa/refs/ploy/`. São as imagens de comparação de cada seção.
4. Crie o app: `npx create-next-app@16.3.6 default --ts --app --eslint --no-tailwind --no-src-dir --import-alias "@/*" --use-npm --yes`. Fixe `react` e `react-dom` em 19.2.8 e `next`/`eslint-config-next` em 16.3.6. Apague o boilerplate (página, CSS e SVGs de exemplo). Mantenha o `AGENTS.md` que ele cria.
5. Commit `tools: setup e screenshots das referências`.

## Fase 1 — Tokens do default

1. Confira os valores 🔶 dos dois SITE-MESTRE medindo no site (espaço entre seções, tempos de animação, raios que faltam). Atualize os SITE-MESTRE trocando 🔶 por ✅ onde medir.
2. Escreva `default/styles/tokens.css` com os tokens do `MESTRE-DEFAULT.md` §2 (cor, fonte, escala, espaço, raios, botões, nav). Se a medição mudar algum valor, ajuste o MESTRE-DEFAULT e registre o porquê.
3. Monte uma página `/specimen` com a escala tipográfica, cores, botões e raios, tire screenshot e compare o "peso" visual com as referências (títulos calmos como a Runway; grito só no `.t-shout`).
4. Commit `default: fase 1 tokens`.

## Fase 2 — Base e componentes de UI

1. `base.css`, fontes em `app/layout.tsx` (Geist, Geist Mono, Anton via `next/font/google`, expostas como `--font-sans`, `--font-mono`, `--font-shout`), `noindex` no metadata.
2. `content/types.ts` + `content/site.ts` com **todas** as seções do MESTRE-DEFAULT §3 preenchidas com placeholders de instrução em português (o que escrever ali, tamanho máximo, exemplo de tom). `order` define a sequência da home; `enabled` liga e desliga.
3. Componentes de UI: `Button` (primary, secondary, outline, light, outline-light, link × lg/md/sm), `Label` (mono), `Media` (imagem, vídeo, placeholder, gradiente, preview), `MediaPlaceholder`, `PreviewCard` (janela de navegador com 3 bolinhas, pill de URL, conteúdo e linha de status: componente genérico, útil para qualquer marca de agência), `Marquee`, `Reveal` (IntersectionObserver), `CountUp`.
4. Commit `default: fase 2 base e ui`.

## Fase 3 — Seções, uma por vez, na ordem do MESTRE-DEFAULT §3

Para **cada** seção (0 Faixa de anúncio → 15 Footer):
1. Construa a partir do content e dos tokens.
2. `tools/shoot.mjs` da home em 1440 e 390; recorte a seção.
3. Compare com a seção de origem em `qa/refs/<runway|ploy>/` (a coluna "Origem" da tabela diz qual). Liste as diferenças de proporção, espaçamento, peso tipográfico e ritmo. Corrija até ficar próximo. Conteúdo diferente é esperado; layout diferente não.
4. Uma linha em `PROGRESSO.md` por seção. Commit a cada 2–3 seções (`default: seções X–Y`).

Pontos de atenção:
- Hero: moldura de 12px a 24px da borda; copy embaixo à esquerda (Runway); 2 CTAs e card de anúncio (Ploy). Suporte `variant: "calm" | "shout"`.
- Header: logo à esquerda, links no centro, 2 botões pequenos à direita; menu mobile acessível (abre/fecha, foco, Esc).
- FeatureTabs: troca automática a cada 6s que para quando o usuário interage; teclado funciona (setas).
- Timeline e ProofField: entradas ao rolar e números contando, desligados com `prefers-reduced-motion`.
- Library: carrossel com setas e rolagem por toque (scroll-snap), sem biblioteca.
- FinalCta: input pill + botão, validação e mensagem de sucesso sem backend.
- Footer: card escuro de raio 20 (Ploy) com colunas (Runway).

## Fase 4 — Responsivo e QA do default

1. Página inteira em 1440, 768 e 390 (`qa/default/`). Sem rolagem horizontal; nada estourando; toque ≥ 44px.
2. Revisão lado a lado final: monte `qa/default/comparacao.md` com, para cada seção, origem, o que ficou igual e o que ficou diferente de propósito.
3. Todas as seções desligáveis somem com `enabled: false` sem quebrar o layout (teste ligando/desligando pelo menos 3).
4. Build + lint. Commit `default: fase 4 responsivo e QA` e tag `v1.0-default`.

## Fase 5 — Criar a versão Front Labs

Leia agora, por completo: `docs/DESIGN.md` e `docs/FRONTLABS-HOME.md`.
1. `rsync -a --exclude node_modules --exclude .next default/ frontlabs/` e `npm install` em `frontlabs/`.
2. Troque `frontlabs/styles/tokens.css` pelos tokens do DESIGN.md §11, **mapeados para os nomes de token do default** (ex.: `--c-bg: #F4F3F1`, `--c-ink: #0A0A0A`, `--w-title: 550`, `--r-frame: 24px`, botões 52/44/36, `--f-shout` = Inter 550 sem caixa-alta: a Front Labs não usa o grito condensado). Fontes: Inter com `opsz`, Geist Mono, Bricolage Grotesque só no logo.
3. Copie `assets/*` para `frontlabs/public/img/`; gere a versão 16:9 do Horizonte.
4. Logo: componente `Logo` com o SVG do símbolo e o nome em Bricolage 800 (DESIGN.md §2).
5. Commit `frontlabs: fase 5 tokens, fontes e assets`.

## Fase 6 — Home da Front Labs

Siga `docs/FRONTLABS-HOME.md` §2 seção por seção, com a copy em inglês e as regras do §3. Use os componentes do default; quando precisar de algo que o default não tem (cards de passo do DESIGN.md §6.8, FAQ do §6.9 com card do Arch, nav em pill), crie o componente no `frontlabs/` e anote no `REVISAR.md` se vale devolver ao default.
- O card de preview é o ativo principal: herói, cards de passo e abas usam versões dele feitas em HTML/CSS (nada de screenshot de site de cliente).
- Gradiente Horizonte só atrás de conteúdo (barra de oferta, passo 03, timeline ou CTA final). Um momento de cor por seção, no máximo.
- Tudo que não tiver fonte: `[CONFIRMAR]` no content + linha no `frontlabs/docs/REVISAR.md`.
- Screenshot a cada seção (1440 e 390), conferindo contra o DESIGN.md: uma cor por título, Inter 550 nos títulos, mono só em rótulos curtos com `/`, botões pill, raio 24, nada de vidro, nada de serifada, nenhum vazio > 12%.
- Commits a cada 2–3 seções (`frontlabs: seções X–Y`).

## Fase 7 — QA da Front Labs (com olhos de fora)

1. Screenshots em 1440, 768 e 390 em `qa/frontlabs/` (página inteira + por seção). Rode `tools/gap-audit.mjs` e corrija o que passar de 12%.
2. Rode um **subagente revisor** que não viu o trabalho, com esta tarefa: "Leia docs/DESIGN.md e docs/FRONTLABS-HOME.md. Abra http://localhost:3011 em 1440 e 390 com Playwright. Liste toda violação do DESIGN.md (cor, fonte, peso, raio, botão, gradiente, foto, vazio), toda frase que prometa algo sem fonte ou nicho em venue onde deveria ser genérico, e todo problema de responsivo ou acessibilidade. Não corrija nada; só a lista, por gravidade." Corrija o que ele apontar (ou registre no REVISAR.md por que não).
3. Build + lint. Commit `frontlabs: fase 7 QA` e tag `v1.0-frontlabs`.

## Fase 8 — Fechar

1. `frontlabs/docs/REVISAR.md` completo: `[CONFIRMAR]`, decisões tomadas sozinho, diferenças em relação ao DESIGN.md e por quê, e o que vale devolver ao default.
2. `docs/PROCESSO-DUAS-REFERENCIAS.md`: acrescente no fim uma seção **Aprendizados da 1ª rodada** (o que travou, o que funcionou, o que mudar no prompt da próxima vez).
3. `qa/RESUMO.png`: uma prancha com a home da Front Labs em 1440 e 390 lado a lado.
4. Entrada no topo de `PROGRESSO.md` com o fechamento.
5. Resumo final em até 10 linhas, em português: o que ficou pronto, como abrir (`cd ~/Documents/FrontLabs-Site/frontlabs && npm run dev -- -p 3011`), os 3 pontos mais importantes do REVISAR.md e o que ficou pela metade, se algo ficou.
