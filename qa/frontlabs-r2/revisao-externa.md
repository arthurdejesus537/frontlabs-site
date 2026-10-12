# Revisão externa · Front Labs r2

12/10/2026 · http://localhost:3111 · rotas `/`, `/how-it-works`, `/what-you-get`, `/pricing`, `/questions`, `/nao-existe` (404, devolve status 404) · 1440 e 390 · Playwright (estilo computado + screenshots de página inteira).
Referências: `docs/DESIGN.md` (v4) e `docs/FRONTLABS-HOME.md`. Nenhum arquivo do projeto foi alterado além deste.

**O que está certo e não entra na lista:** sem rolagem horizontal em nenhuma rota (scrollWidth = viewport em 1440 e 390); só Inter 400/550, Geist Mono 400 e Bricolage 800 (esta só no nome "FrontLabs"); sem serifada; botões pill (999) com 52/44/36 de altura; foco visível em todos os links e botões (contorno 2px preto + halo branco); todas as `<img>` decorativas com `alt=""`; nenhum botão sem nome; menu mobile fecha com Esc; `prefers-reduced-motion` respeitado (nenhuma animação rodando, linha que preenche já vem cheia); contraste do texto branco sobre a foto borrada e o Horizonte passa AA (mediana 6–12:1); "Can you get me to #1 on Google? — No one can." está correto.

---

## Grave

1. **`/` e `/how-it-works` · 390 · card de preview cortado dentro do palco.** Na home (abas "What we do at every step", aba Code) o palco tem 324×421 e o card de preview passa 74px da borda de baixo: a linha de status "● the right foundation" e parte do bloco "/pages Easy to read" somem. Em `/how-it-works` acontece o mesmo nas linhas 01 Code e 02 Design (palco 358×448; status e blocos `/calls` `/hours` cortados). É o principal ativo da marca (DESIGN §10.2) e aparece cortado no celular.
2. **`/pricing` · 390 · tabela "Every plan, side by side" esconde a coluna Signature.** A tabela tem 560px dentro de uma área de 358px com rolagem horizontal. Não há nenhuma pista de que dá para rolar: a coluna Launch encosta na borda direita ("Launch", "2 × $300" cortados no limite) e a coluna Signature, que é o plano recomendado, fica toda fora da tela.

## Médio

### Violações do DESIGN.md
3. **Todas as rotas · 1440 e 390 · H1 fora da escala.** Herói da home e todos os `PageHero` medem **103,68px** / 550 / −0,045em em 1440 (Display = **72px**, §3.1) e **48px** em 390 (Display mobile = **44px**). A virada do 404 ("Your new site could be, though.") fica com 64px.
4. **`/` · 1440 e 390 · frase de destaque (linha que preenche) grande demais.** "Most local websites launch. Then they stop working." mede **86,4px** em 1440 e 40px em 390, centralizada na largura toda. O DESIGN §9.3 e o briefing §2.4 pedem uma frase calma de **30–34px em 7 colunas**. Somada ao herói de 104px e aos números de 72px dos cards ao vivo, a home fica com **três momentos de impacto**, e o §1.5 pede um por página.
5. **`/` · 1440 e 390 · Horizonte em duas seções da mesma página.** A seção "Running while you work." (cards ao vivo, 1392×781) e a chamada final usam o gradiente Horizonte. O §4.4 diz que a cor entra em **uma** seção por página (normalmente a chamada final).
6. **`/how-it-works` · 1440 e 390 · palcos das linhas Code/Design/Booking/Launch/Care com raio de 10px.** O DESIGN §5.3 dá 24px para foto, gradiente e palco borrado (§4.2.2: "Sempre com raio 24"). Na home, o mesmo palco dentro do card das abas tem 18px, o que está certo para imagem dentro de card.
7. **`/` · herói e estrutura diferentes do briefing.** O herói não tem o rótulo `/for local businesses` nem o card de preview ao lado, e o título não é "Online stuff, handled." / "Go run your business." (FRONTLABS-HOME §2.2, DESIGN §9.2). Também faltam na home a faixa de tipos de negócio (LogoStrip), "Para quem" (Audience), os 3 cards de passo e o "dia handled" (Timeline). Por isso nada na home mostra para quais tipos de negócio local o serviço é. Se a mudança foi decisão da rodada 2, falta atualizar o FRONTLABS-HOME.md.

### Copy (promessa sem fonte ou inconsistência)
8. **`/what-you-get` · "Five parts, one site."** ao lado de **seis** cards (The site, Front Cinematic, Booking system, Review requests, Care, Yours).
9. **`/` · promessa de resultado implícita.** Os cards de Resultados dizem "More people find you", "More calls and visits", "More booked meetings" e "More reviews", e o pilar Found diz "When someone nearby searches for what you do, your site is built to show up." Nenhuma dessas frases tem número, mas todas prometem resultado, e "built to show up" na busca chega perto da posição no Google que o briefing §3 proíbe. Sugestão: falar do que é feito ("built the right way for Google"), não do resultado.

### Responsivo e acessibilidade
10. **`/pricing` · 1440 e 390 · contraste abaixo de AA no bloco "How payment works".** Texto `--mute` #6B6966 sobre o fundo do bloco **#E9E8E5** dá **4,47:1** (precisa de 4,5:1 para texto de 16–20px). Afeta o lead e as 5 descrições (`dd`). Além disso, #E9E8E5 não é token do DESIGN (o cinza do sistema é `--grey` #EFEEEC).
11. **Todas as rotas · 390 · botão "Get my free preview" do cabeçalho com 36px de altura** (169×36). Fica abaixo do toque mínimo de 44px (CLAUDE.md §3.11). O DESIGN pede 36 para navegação, então o jeito é aumentar a área de toque sem mudar o desenho.
12. **`/pricing` · 1440 e 390 · link "Start with the free preview"** ("Not sure which one?") tem **192×17px** de área de toque.

## Leve

### DESIGN.md
13. **`/how-it-works`, `/what-you-get`, `/pricing`, `/questions`, 404 · rótulo do herói em pílula preta com Inter** ("How it works", "Pricing", "/404", e "Compare plans" na tabela). Pelo §3.1, o rótulo é Geist Mono 13 em minúsculas e começa com "/"; selo, pelo §3.4, é pílula contornada. O resto do site usa o padrão certo (`/what changes`, `/the process`).
14. **`/`, `/what-you-get`, `/pricing` · etiquetas mono com maiúscula** ("Launch", "Signature", "Front Cinematic", "Everything handled", "Add-on"). O rótulo mono deve vir em minúsculas (§3.1).
15. **`/`, `/pricing` · nome do plano no card com 20px** ("Launch", "Signature", "Front Cinematic"; 18px em 390). O título de card é 24px (§3.1).
16. **Todas as rotas · rodapé em bloco preto (#0A0A0A) de raio 24.** O sistema não tem seção escura: o `--ink` é para texto e botão primário, e o §9.9 pede só logo e "Online stuff, handled.". Não é cor, mas é um campo que o DESIGN não prevê.
17. **`/` · 1440 · botão de pausa das abas com 32×32.** Os círculos de ícone do §6.2 têm 44–52 (em 390 ele já tem 44).
18. **`/` · 1440 · vazio de 215px (24% da viewport)** entre "Front Labs keeps yours working." e "What a local business needs online.". A seção da linha que preenche tem padding de 144/144, contra 72/72 nas outras seções; nas outras seções o vazio é de 143px.
19. **`/how-it-works` · 1440 · card de passo 01:** o mini card de preview corta o texto no meio da linha ("Your new homepage, built…") e a URL vira "preview.front…". Em 390 as URLs dos cards de preview também viram reticências ("preview.frontlabs.c…", "care.frontlabs.co/your…").
20. **`/what-you-get` · 1440 e 390 · listas com seta "→" em itens que não são link.** A seta sugere que dá para clicar. Também há uma inconsistência: Launch e Care têm botão preto, Front Cinematic e Booking system não têm nenhum.

### Copy
21. **`/` · cards ao vivo.** O rótulo "/example · illustrative numbers" está claro, mas fica só no topo da seção. Em 390 os três cards empilham em 1.456px de altura, e o 2º e o 3º aparecem sem o rótulo, com a marca "FrontLabs", o ponto verde de status e dados que parecem reais ("plumbing company in Houston", "Speed score 96", "auto-reply sent in 1 min"). Sugestão: repetir "example" dentro de cada card, por exemplo no lugar do ponto verde.
22. **`/pricing` · "Pay once. Keep it forever."** e "No monthly fee, ever" são absolutos que a fonte (sem mensalidade, o site é do cliente) não cobre. "Forever" depende do domínio e da hospedagem, que o cliente paga.
23. **`/how-it-works` · "a booking form that takes a minute" e "Booking that takes a minute"** são um prazo sem medição. É leve, mas é o tipo de número que o briefing pede para evitar.
24. **`/` e `/questions` · "archielewis49@gmail.com [CONFIRMAR e-mail público]"** aparece para o visitante. Já está listado no REVISAR, só lembrar antes de publicar.
25. **`/pricing` · preços diferentes do FRONTLABS-HOME §4.** O briefing traz "Signature US$999 à vista ou US$500 + 6× US$99", e o site mostra 3 × $333 ("one 30 days later") e Launch $600 = 2 × $300. O REVISAR R2.1 dá como fonte a apresentação de 10/10, então não é invenção, mas o FRONTLABS-HOME.md ficou desatualizado.

### Acessibilidade
26. **Todas as rotas · campo da chamada final:** o `input` tem `outline: none`, e o único sinal de foco é a borda de 1px da pílula ficar preta (antes era clara). O sinal existe, mas é fraco perto do foco do resto do site (2px + halo).
27. **`/pricing` · área de rolagem da tabela com `role="region"` e `tabindex`, mas sem `aria-label`** (região sem nome). Falta também um `<caption>` na tabela.
28. **`/pricing` · ordem de títulos:** do H1 "Pay once. Keep it forever." pula direto para os H3 dos planos (Launch, Signature, Front Cinematic), sem H2.
29. **Todas as rotas · nomes de título grudados:** o texto do H2 com a virada sai como "…pay a thing.Fire your web designer. Politely." e "…needs online.Four things…", e as perguntas do FAQ como "01Do I pay anything…". Leitores de tela tendem a ler sem pausa. Um espaço ou um `<br>`/separador resolve.
30. **`/` · 390 · "Fire your web designer. Politely."** com 21px/550 em branco 92% sobre o Horizonte: o percentil 5 do contraste dá 4,38:1 e a mediana 5,76:1. Como 21px a 550 não conta como texto grande, fica no limite.
31. **`/` · linha que preenche:** antes de preencher, a palavra fica #D9D7D3 sobre #F4F3F1 (**~1,3:1**). Isso só dura durante a rolagem, porque com reduced-motion e com âncora a frase já vem cheia, e o H2 tem `aria-label`. Mesmo assim, quem para a rolagem no meio lê cinza-claro sobre cinza.
32. **`/` · odômetro dos cards ao vivo:** o leitor de tela recebe certo (`role="img"` + `aria-label="3"`), mas o texto copiado e o `innerText` saem como "0 1 2 3 4 5 6 7 8 9" em cada dígito.
33. **Todas as rotas · 390 · link "Home" do rodapé com 39×44** (largura abaixo de 44).
34. **Todas as rotas · 390 · com o menu aberto, aparecem dois "Get my free preview" pretos** (cabeçalho + rodapé do menu). Fica redundante.

---

Arquivos de apoio (fora do projeto): screenshots e medições em `/private/tmp/claude-501/-Users-pedroivo-Documents-FrontLabs-Site/f6d17806-836f-417f-8226-c39154a007d5/scratchpad/revisor/` (`shots/`, `tiles/`, `report.json`).
