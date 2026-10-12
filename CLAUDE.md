# CLAUDE.md — FrontLabs-Site

> Lido automaticamente no início de cada sessão. Leia também, antes de escrever código:
> `docs/MESTRE-DEFAULT.md`, `docs/referencias/SITE-MESTRE-RUNWAY.md`, `docs/referencias/SITE-MESTRE-PLOY.md`.
> Na fase Front Labs: `docs/DESIGN.md` (inteiro) e `docs/FRONTLABS-HOME.md`.
> O roteiro da noite está em `PROMPT_NOITE.md`. O andamento fica em `PROGRESSO.md`.

---

## 0. O que é este projeto

Clonagem com **duas referências** ao mesmo tempo (runway.com e ploy.ai), em duas etapas:

1. **`default/`** — o site-base: o sistema visual e a estrutura de uma home de empresa de serviço, juntando o que há de mais relevante nas duas referências (regra de mistura em `docs/MESTRE-DEFAULT.md`). Sem marca: tokens neutros, placeholders de texto e de mídia.
2. **`frontlabs/`** — cópia do default vestida com o `docs/DESIGN.md` da Front Labs e com o conteúdo de `docs/FRONTLABS-HOME.md`. Fala com **negócios locais em geral**, não só wedding venues.

Copiar das referências: sistema, layout, ritmo, comportamento. **Não copiar:** logos, fotos, vídeos, textos, nomes de produto e fontes pagas (ABC Normal, FK Screamer).

## 1. Stack (igual ao ~/site-build e ao ~/venue-default)

- Next.js **16.3.6** (App Router, TypeScript), React 19.2.8. Antes de escrever código, consulte `node_modules/next/dist/docs/` (esta versão tem mudanças em relação ao que você conhece).
- **CSS puro com tokens** (CSS custom properties) + CSS Modules, um por componente. Sem Tailwind, sem shadcn, sem biblioteca de UI.
- Fontes via `next/font/google`. Default: Geist, Geist Mono, Anton. Front Labs: Inter (com eixo `opsz`), Geist Mono, Bricolage Grotesque (só no nome).
- Todo texto do site em `content/site.ts`; cada seção com `enabled`. Nenhum texto solto em componente.
- Sem backend: formulários só com validação e estado de sucesso.
- Movimento só com CSS/IntersectionObserver (sem Framer Motion), sempre respeitando `prefers-reduced-motion`.

## 2. Estrutura

```
FrontLabs-Site/
├── CLAUDE.md · PROMPT_NOITE.md · PROGRESSO.md · LEIA-ME.txt
├── docs/        MESTRE-DEFAULT.md · DESIGN.md · FRONTLABS-HOME.md · PROCESSO-DUAS-REFERENCIAS.md · referencias/
├── assets/      gradiente, grão e fotos da Front Labs
├── tools/       scripts de screenshot e medição (Playwright)
├── qa/          screenshots (default/, frontlabs/, refs/)
├── default/     app Next.js — o site-base
└── frontlabs/   app Next.js — a versão Front Labs
```

Dentro de cada app:
```
app/ (layout.tsx, page.tsx, globals.css)
components/ layout/ (Header, Footer, AnnouncementBar, MobileMenu) · sections/ (uma por seção) · ui/ (Button, Label, Media, MediaPlaceholder, PreviewCard, Marquee, Reveal…)
styles/ tokens.css · base.css · *.module.css
content/ site.ts · types.ts
public/img/
docs/ (só no frontlabs: REVISAR.md)
```

## 3. Regras de trabalho

1. **Medido vence estimado.** Valor marcado 🔶 nos SITE-MESTRE só entra depois de medido no site original com Playwright (computed style). Os ✅ já foram medidos em 12/10/2026.
2. **Uma seção por vez, na ordem do `docs/MESTRE-DEFAULT.md` §3.** Ao terminar cada seção: screenshot da nossa (1440 e 390) e da seção equivalente da referência de origem, comparar e listar as diferenças de proporção, espaçamento e ritmo (não de conteúdo). Corrigir até ficar próximo e só então seguir.
3. **Tokens primeiro, componente depois.** Nenhuma cor, tamanho ou espaçamento solto em componente: tudo `var(--token)`.
4. **Placeholders no default:** mídia = bloco `var(--c-placeholder)` no formato certo com rótulo mono (`[foto 16:9 · mín. 1600px]`); texto = instrução entre colchetes, em português. Nunca foto de banco, nunca texto inventado como definitivo.
5. **Nunca inventar fatos** na versão Front Labs (números, clientes, depoimentos, logos, prazos, preços sem fonte). Sem fonte → `[CONFIRMAR]` + linha no `frontlabs/docs/REVISAR.md`.
6. **Não alterar** `~/site-build`, `~/venue-default` nem nada fora desta pasta.
7. **Build e lint** (`npm run build`, `npm run lint`) sem erro ao fim de cada fase.
8. **Commits pequenos**, um por fase, na raiz `FrontLabs-Site` (um repositório só). Prefixos: `default:`, `frontlabs:`, `docs:`, `tools:`. Tags: `v1.0-default` e `v1.0-frontlabs`. Não fazer push.
9. **Autonomia:** o Pedro está dormindo. Não pergunte nada. Decida pelo mais razoável, registre a decisão em `PROGRESSO.md` (e no `REVISAR.md` quando for da Front Labs) e siga.
10. **Retomável:** antes de cada fase, leia `PROGRESSO.md` e continue de onde parou. Depois de cada fase, atualize-o.
11. **Responsivo:** sem rolagem horizontal em 390, 768 e 1440. Toque mínimo de 44px no celular.
12. **Acessibilidade básica:** contraste AA no texto, `alt` em toda imagem, foco visível, `aria-label` em botões só com ícone.

## 4. Comandos

```bash
cd default   && npm run dev -- -p 3010    # site-base
cd frontlabs && npm run dev -- -p 3011    # versão Front Labs
npm run build && npm run lint
node tools/shoot.mjs <url> <saida> [larguras]   # screenshots (criado na Fase 0)
```

## 5. Frases de correção que funcionam

- "Meça isso no Playwright antes de decidir o valor."
- "Compare de novo lado a lado e liste só o que ainda está diferente."
- "Sem sombra, sem gradiente colorido, sem cantos exagerados" (no default, quando algo puxar para template genérico).
