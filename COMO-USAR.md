# Front Labs Site: como puxar e mexer

Repositório do site da Front Labs (Next.js 16). A versão atual é a tag `v2.0-frontlabs`, a mesma que está no ar em https://frontlabs.vercel.app.

## O que tem aqui

| Pasta | O que é |
|---|---|
| `frontlabs/` | **o site da Front Labs**: é aqui que se mexe |
| `default/` | o template-base (Runway + Ploy), sem marca |
| `docs/` | `DESIGN.md` (regras visuais da marca), briefing da home, referências medidas |
| `qa/` | screenshots de cada rodada |
| `CLAUDE.md`, `PROMPT_*.md`, `PROGRESSO.md` | instruções e histórico para o Claude Code |

## Primeira vez

Precisa de Node 20+ e git.

```bash
git clone https://github.com/pedroivosantana06-create/frontlabs-site.git
cd frontlabs-site/frontlabs
npm install
npm run dev
```

Depois abra http://localhost:3000.

## Onde mudar o quê

- **Textos, preços, links e seções ligadas/desligadas:** `frontlabs/content/site.ts`. Todo texto do site está ali.
- **Cores, fontes, tamanhos e raios:** `frontlabs/styles/tokens.css`. Siga o `docs/DESIGN.md`.
- **Imagens:** `frontlabs/public/img/`.
- **Páginas:** `frontlabs/app/` (`/pricing`, `/how-it-works`, `/what-you-get`, `/questions`).
- **Pendências e decisões em aberto:** `frontlabs/docs/REVISAR.md`.

## Para trabalhar sem atropelar o outro

```bash
git pull                          # sempre antes de começar
git checkout -b ajuste-copy-home  # uma branch por mudança
# ... edita ...
cd frontlabs && npm run build && npm run lint   # tem que passar sem erro
git add -A && git commit -m "frontlabs: ajusta copy da home"
git push -u origin ajuste-copy-home
```

Depois abra um Pull Request no GitHub para a `main`. Não faça push direto na `main`.

Com o Claude Code: abra na raiz (`cd frontlabs-site && claude`). Ele lê o `CLAUDE.md` sozinho.
