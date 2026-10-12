# Processo: clonar DUAS referências e montar um default (Claude + Claude Code)

Adaptação do processo do `~/site-build` (uma referência, montamont.com) para **duas referências ao mesmo tempo**. Primeira rodada: runway.com + ploy.ai → `default/` → site da Front Labs.

## Visão geral

| Etapa | Quem | O que sai |
|---|---|---|
| 1. Escolher as duas referências e o objetivo | Pedro | 2 URLs + "para quê" (aqui: home de empresa de serviço, depois Front Labs) |
| 2. Medir as duas | Claude (chat) ou Claude Code | `SITE-MESTRE-<A>.md` e `SITE-MESTRE-<B>.md` com ✅/🔶, screenshots e JSON de estilos |
| 3. Regra da mistura | Claude (chat) | `MESTRE-DEFAULT.md`: de onde vem cada token e cada seção, e quem ganha quando as duas brigam |
| 4. Pacote da noite | Claude (chat) | `CLAUDE.md` + `PROMPT_NOITE.md` + docs da marca + assets |
| 5. Rodada da noite | Claude Code, sozinho | `default/` (tag `v1.0-default`) e `<marca>/` (tag `v1.0-<marca>`), QA e REVISAR.md |
| 6. Revisão de manhã | Pedro | aprova, pede ajustes, responde os `[CONFIRMAR]` |

## O que muda em relação ao processo de uma referência

1. **Dois SITE-MESTRE em vez de um.** Cada um continua sendo o blueprint fiel do seu site.
2. **Um documento novo: a regra da mistura (`MESTRE-DEFAULT.md`).** Antes de qualquer código ele decide:
   - quem ganha em cada conflito (aqui: estrutura de venda da B, acabamento calmo da A, o comum entra direto);
   - a tabela de tokens com a origem de cada valor;
   - a ordem das seções com a origem de cada uma e o papel dela na venda.
3. **Comparação por origem.** Cada seção do default é comparada com a seção do site de onde veio (coluna "Origem"), não com as duas.
4. **O "estilo forte" vira opcional.** O que é muito de uma marca (aqui, o título condensado em caixa-alta da Ploy) entra como **um estilo isolado** (`.t-shout`), controlado por token, que a marca pode desligar.
5. **Default sem marca, depois a marca.** O default é neutro e cheio de placeholders. A versão da marca é uma cópia que só troca `tokens.css`, `content/site.ts`, as imagens e, quando preciso, alguns componentes próprios (anotados para voltar ao default).
6. **Uma rodada só, de noite.** O Claude Code recebe tudo pronto e trabalha sem perguntar: decide, anota em `PROGRESSO.md` e segue. De manhã o Pedro lê o `REVISAR.md`.

## Como rodar de novo com outras referências

1. Num chat do Claude: "Mede [URL A] e [URL B] e escreve os dois SITE-MESTRE no formato de `docs/referencias/`" (ou peça ao Claude Code com `tools/measure.mjs` e `tools/sections.mjs`).
2. No mesmo chat: "Escreve o MESTRE-DEFAULT juntando as duas, com a regra da mistura, tokens com origem e a ordem das seções com origem e papel na venda."
3. Copie esta pasta sem `default/`, `frontlabs/` e `qa/`, troque os docs e o briefing da marca e ajuste o `PROMPT_NOITE.md` (nomes das pastas e das tags).
4. No Terminal: `cd <pasta> && caffeinate -dims claude`, ligue o auto mode (Shift+Tab) e mande: `Leia PROMPT_NOITE.md e execute tudo, fase por fase, sem me perguntar nada.`
5. De manhã: `PROGRESSO.md` → `REVISAR.md` → `npm run dev` nas duas pastas.

## Armadilhas conhecidas (herdadas do site-build e do venue-default)

| Problema | Causa | Solução |
|---|---|---|
| Claude Code não segue as fases | o `create-next-app` cria um CLAUDE.md próprio dentro do app | o CLAUDE.md que manda é o da raiz; o do app só tem `@AGENTS.md` |
| Versão do Next diferente | o instalador baixa a mais nova | fixar 16.3.6 e React 19.2.8 |
| Visual genérico (sombra, canto redondo demais) | valor não medido | "Meça isso no Playwright antes de decidir o valor." |
| Sessão cai no meio da noite | contexto cheio ou erro | `PROGRESSO.md` + rodar o `PROMPT_NOITE.md` de novo; ele retoma |
| Fontes da referência não carregam no screenshot | fonte paga com proteção de domínio | comparar proporção e peso, não o desenho da letra |
| Mac dorme | — | `caffeinate -dims` antes do `claude` |

## Aprendizados da 1ª rodada

(O Claude Code preenche ao fim da Fase 8.)
