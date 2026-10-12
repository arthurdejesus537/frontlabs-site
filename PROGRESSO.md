# PROGRESSO

Uma linha por fase (e por seção nas Fases 3 e 6): data/hora · fase · o que saiu · decisões tomadas sozinho · problemas.
A entrada mais nova fica no topo.

---

- 12/10 · Fase 1 · tokens do default em `default/styles/tokens.css` + `/specimen`. Medido no Playwright: vazio entre seções (Runway 200–290px, Ploy 136–255px a 1440) → `--section-y` 96/64 (era 144/88 estimado; MESTRE-DEFAULT atualizado); hover 150ms cubic-bezier(.4,0,.2,1); entrada 720ms; faixa da Runway é #2B22FA sólida (não gradiente). Decisões: `--c-soft` #8A8A8A para o grito cinza do "problema" (≥3:1, AA para texto grande — a Ploy usa cinza bem mais claro); intervalo das abas da Runway não mensurável sem interação → mantido 6s. Specimen: grito só no `.t-shout`, títulos 500 calmos.
- 12/10 · Fase 0 · git, `.gitignore`, `tools/` (shoot, measure, sections, gap-audit, strips.py), Chromium do Playwright, `qa/refs/runway` e `qa/refs/ploy` (1440 e 390; a Ploy tem poucos `<section>`, então o script completa com fatias de 1 janela), app `default/` em Next 16.3.6 / React 19.2.8 sem boilerplate.
- 12/10 00:30 · Fase −1 (Claude, chat) · pacote montado: CLAUDE.md, PROMPT_NOITE.md, docs (MESTRE-DEFAULT, 2 SITE-MESTRE medidos com Playwright em 1440 e 390, DESIGN.md v4, FRONTLABS-HOME), assets. Nenhum código ainda. Próximo: Fase 0.
