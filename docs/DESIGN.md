# FrontLabs · DESIGN.md

Fonte da verdade da identidade visual da FrontLabs. Vale para tudo que é da marca: landing, posts, stories, vídeos, documentos internos e PDFs para clientes. Os sites dos venues seguem o template próprio deles, não este arquivo.

Versão 4 · 10 de outubro de 2026 · revisada em 13 de outubro (grão vira último recurso, 4.3) · baseado no design system v2 do Arthur, revisado com referências da Runway, ElevenLabs, Apple, Ploy, Pensatori e da campanha Just Rest.

Arquivos que acompanham este documento estão no **FrontLabs-Brand-Kit** (seção 14).

---

## 0. Como usar este arquivo

- Toda peça nova parte daqui. Se algo não está aqui, não existe no sistema ainda.
- Antes de inventar um estilo novo, a pergunta é: "isso já tem regra?". Se não tem, a decisão entra neste arquivo antes de ir para a peça.
- Para o Claude Code: leia este arquivo inteiro antes de montar qualquer página ou peça. Use os tokens da seção 11 como CSS variables, nunca valores soltos.

---

## 1. Princípios

1. **Base preto e branco.** A cor é exceção, com lugar definido.
2. **Uma cor por título.** Nunca dois tons na mesma frase.
3. **Imagem de verdade carrega a peça.** Foto real ou o produto, nunca ilustração genérica.
4. **Foto só no feed e, talvez, no site.** Documentos, PDFs e apresentações não levam foto. O que pode entrar neles é o **produto** (card de preview, seção 10.2), sobre a foto do venue **bem borrada**, que deixa de ser foto e vira fundo. No site, a foto fica em moldura e nunca ocupa o fundo todo. No feed, o post inteiro é a moldura.
5. **Um momento de impacto por página.** Um número enorme, uma foto grande, um título que domina. O resto fica calmo.
6. **Espaço com intenção.** Respiro, não sobra. Nenhum buraco no meio da página (regra em 10.1).
7. **Mostrar o produto, não falar dele.** Sempre que der, a prova é o site real do venue dentro do card de preview.

---

## 2. Logo

- **Lockup oficial:** símbolo `|/` (uma barra reta e uma inclinada) + "FrontLabs" em **Bricolage Grotesque 800, corte de título** (`opsz` 96), espaçamento −0.05em. O símbolo continua o da versão A.
- **A Bricolage só aparece no nome.** Nunca em título, texto ou botão.
- **Variações descartadas:** nome em Inter 550, Bagel Fat One (puxava para o estilo Nike), Gabarito, Bricolage condensada, em minúscula e em dois pesos.
- **Espaço entre símbolo e nome:** 0,2 do tamanho da letra. Símbolo com 0,78 da altura da fonte.
- **Cores:** preto sobre fundo claro, branco sobre foto, campo ou gradiente. O logo nunca é pintado com gradiente.
- **Foto de perfil:** círculo branco com o lockup completo. Se ficar ilegível em tamanhos pequenos (comentários, stories), usar só o símbolo `|/`.
- **A porta não faz parte da marca.** Nem como elemento visual, nem em prompts, nem em textos.

> Em aberto: escrever o nome no texto como "Front Labs" (separado) ou "FrontLabs" (junto, como no logo). Hoje os documentos usam "Front Labs" no corpo.

---

## 3. Tipografia

Duas famílias no sistema, mais a Bricolage Grotesque reservada só para o nome FrontLabs.

| Família | Uso |
|---|---|
| **Inter** (variável, com tamanho ótico) | Títulos, textos, botões, números |
| **Geist Mono** 400 | Rótulos curtos, caminhos, metadados |
| **Bricolage Grotesque** 800, `opsz` 96 | Só o nome FrontLabs no logo |

Todas do Google Fonts. Testadas e descartadas para títulos: Geist, Instrument Sans, Schibsted Grotesk, Hanken Grotesk, Bagel Fat One, Anton.

### 3.1 Escala (web)

| Estilo | Tamanho / entrelinha | Peso | Espaçamento | Observação |
|---|---|---|---|---|
| Display | 72 / 1.0 | 550 | −0.045em | Herói, capa |
| Título | 48 / 1.02 | 550 | −0.045em | Título de seção |
| Destaque | 30 / 1.28 | 400 | −0.02em | Parágrafo de abertura de seção, tamanho ótico display, máx. 4 linhas e 560px |
| Título de card | 24 / 1.15 | 550 | −0.025em | Cards de notícia, itens de lista |
| Nome sobre campo | livre | 400 | −0.025em | Ver 3.3 |
| Lead | 20 / 1.45 | 400 | normal | Tamanho ótico de texto (opsz 14), cor secundária |
| Corpo | 17 / 1.5 | 400 | normal | opsz 14 |
| Pequeno | 14 / 1.45 | 400 | normal | opsz 14 |
| Rótulo mono | 13 | Geist Mono 400 | normal | Minúsculas, começa com `/` |

Mobile: Display cai para 44, Título para 34, Destaque para 22. O resto se mantém.

### 3.2 Regras

- **Título numa cor só.** A "virada" de uma frase vira uma segunda linha menor, abaixo, em cor secundária (como "iPhone 18 Pro" / "Pro further." da Apple).
- **Descrição sempre no tamanho ótico de texto** (`font-variation-settings: "opsz" 14`), peso 400, espaçamento normal. É o que separa a descrição do título sem trocar de fonte.
- **Mono só em rótulos curtos:** `/how it works`, `/for wedding venues`, `/a empresa · 02`. Nunca em frase.
- **Sem texto em gradiente.**
- **Sem serifada.** A Instrument Serif foi testada e descartada.

### 3.3 Nomes sobre campo de cor

Quando um nome aparece sozinho sobre um campo ou foto (estilo "Introducing / Runway Ads"):

- **Nome:** Inter 400, −0.025em, cor cheia.
- **Palavra de apoio** ("The", "Introducing", "What we usually"): Inter 300, pequena, 40% de opacidade, alinhada à esquerda, acima do nome.
- É a única exceção à regra de uma cor por título, e vale só para nomes sobre campo, nunca para frases com ponto final.

### 3.4 Selo de versão

Pill contornada com o número: `v1`. Mesma cor do texto ao lado, borda de 1–4px conforme o tamanho. Aparece em "Site Journel v1" e em lançamentos.

---

## 4. Cor

### 4.1 Neutros

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#F4F3F1` | Fundo de tudo. Branco-acinzentado, **não** creme |
| `--card` | `#FFFFFF` | Cards, campos de formulário, superfícies em destaque |
| `--line` | `#E3E1DD` | Linhas e bordas |
| `--ink` | `#0A0A0A` | Texto principal, botões primários |
| `--mute` | `#6B6966` | Texto secundário (contraste acima de 4.5:1 sobre o fundo) |
| `--soft` | `#9A9792` | Marcadores, ícones inativos. Nunca em texto corrido |

O branco puro não some: ele vira superfície de destaque. Um card branco sobre o fundo `#F4F3F1` se destaca sem sombra.

### 4.2 Campos de cor

**Legado, em aberto.** Nos documentos e na landing, o lugar dos campos foi tomado pelo gradiente Horizonte (4.2.1). Os campos ficam guardados aqui até decidirmos se são recoloridos com a paleta Paisagem ou aposentados.

**Receita: monocromática.** Um matiz por campo, do tom médio em cima ao escuro embaixo, sempre de cima para baixo, limpo, sem grão (4.3). Sem manchas de luz, sem grade, sem bolinhas.

| Campo | Topo | Meio | Base | Apoio claro | Função |
|---|---|---|---|---|---|
| **Night** | `#2F4BD6` | `#1D2D80` | `#121A3A` | `#C9D4FF` | Lançamentos, "introducing", anúncios |
| **Sage** | `#2F7F5E` | `#235E47` | `#173F33` | `#BFE3C0` | Ofertas, preço, como funciona |
| **Amber** | `#C4562A` | `#7A3218` | `#3A1A12` | `#FFD9B0` | Chamada final, stories, convites |

Texto sobre campo: sempre branco.

### 4.2.1 Paleta Paisagem (imagens e gradiente)

A paleta das **imagens**: céu azul, mata escura, grama oliva, madeira moca e linho branco, quase sempre com uma pessoa. Ela não é cor de interface: **nunca vai em texto, botão, logo ou ícone**. A tipografia continua preto e branco.

| Token | Hex | De onde vem |
|---|---|---|
| `--p-ceu` | `#1F6F9E` | céu no alto |
| `--p-ceu-claro` | `#86AABB` | céu perto do horizonte, névoa |
| `--p-mata` | `#1A2018` | linha de árvores, sombra |
| `--p-grama` | `#667235` | gramado |
| `--p-musgo` | `#36451A` | grama na sombra |
| `--p-moca` | `#836A4E` | madeira, couro, pele bronzeada |
| `--p-madeira` | `#402F1D` | madeira escura, interiores |
| `--p-linho` | `#DED5C9` | vestido, toalha, parede clara |

**Gradiente Horizonte.** É o único gradiente da marca, feito só com as cores da paleta, sem foto: manchas suaves misturadas (céu `#1F6F9E` e `#2E86B5` em cima, névoa `#9BB8C4` no meio, mata `#25301F` e `#2A3524` abaixo, grama `#6F7A38` e `#55602A` embaixo, musgo `#3E4C1D` na base), sem faixas duras, limpo. O degradê em faixas e a versão a partir de foto borrada foram testados e descartados.

- Arquivos prontos: `gradiente-horizonte-16x9.jpg`, `-4x5.jpg`, `-9x16.jpg`.
- Uso: fundo de apresentação de peças, fundo de stories e posts de texto, palco para mockups e cards. Sobre ele, cards claros ou texto branco.
- Em documento sem foto, o gradiente Horizonte pode entrar no lugar de um campo de cor.
- **Sempre atrás de conteúdo:** um número, um preço, uma citação, um card. Nunca um bloco grande vazio com uma frase solta só para decorar.

**Descartado:** os gradientes radiais do Arthur (Night, Dawn, Dusk) saem; o gradiente Horizonte ocupa esse lugar.

### 4.2.2 Fundo borrado do venue

A foto da home do venue, borrada até virar mancha de cor (reduzir para ~120px, desfocar, ampliar, desfocar de novo, +15% de cor e +8% de luz, sem grão). Serve de **palco** atrás do card de preview e de cards de produto, no lugar do cinza liso. Na landing, o herói usa o mesmo fundo com um movimento lento de câmera (ciclo de 22s, escala 1,04–1,08), como se fosse vídeo.

- Arquivo de exemplo: `componentes/bt-blur.jpg` (Bella Terra).
- Sempre com raio 24 e conteúdo em cima. Nunca como fundo de página inteira em documento.

### 4.3 Grão: só em último recurso

**Padrão: sem grão.** Fotos, vídeos, o gradiente Horizonte, os campos e os fundos borrados saem limpos. O grão não é parte da estética da marca.

Ele só entra como correção, numa peça específica, quando não houver outro jeito:

- o degradê marca faixas visíveis (banding) e não some exportando em mais bits ou com mais cor;
- a imagem gerada por IA ou o vídeo comprimido tem um artefato que o grão disfarça melhor do que regerar.

Quando entrar: bem fino, ruído monocromático em `overlay` a no máximo 15%, sem a segunda camada em `multiply`, e só na área que precisa. Anotar na peça por que entrou. Nunca usar grão "para dar textura" ou "cara de filme".

### 4.4 Onde a cor entra

1. Barra de oferta no topo do site
2. Campos de lançamento: post "Introducing", capa de carrossel, miniaturas de notícia
3. **Uma** seção por página (normalmente a chamada final)
4. Pequenos detalhes: ponto verde de status (`#2F7F5E`), círculo do post de tag, fundo do card de produto
5. **Gráficos** (4.6)

### 4.5 Onde a cor nunca entra

Texto, botões, logo, fundo de seções comuns, palavras soltas dentro de frases. Vale para os campos e para a paleta Paisagem: a interface é preto e branco. A única exceção são as marcas de dados em gráficos (4.6); os números e rótulos do gráfico continuam em preto e cinza.

### 4.6 Cor em gráficos

Gráfico em preto e cinza fica cru. As barras usam a paleta Paisagem, numa ordem fixa, com o verde um pouco mais vivo para não ler como cinza:

| Ordem | Cor | Uso típico |
|---|---|---|
| 1 | Céu `#1F6F9E` | Primeira série (ex.: primeiro pagamento) |
| 2 | Grama `#748A2C` | Segunda série (ex.: segundo pagamento) |
| — | Moca `#836A4E`, tracejado com listras leves | "O que você economiza" ou valor que sai |

- Par validado para daltonismo e contraste (diferença 20+, contraste acima de 3:1 sobre o fundo).
- Legenda sempre presente; valores escritos dentro ou ao lado da barra, em branco ou preto, nunca na cor da série.
- Barras com cantos de 4px e 2px de espaço entre segmentos. Total em Inter 550 à direita.
- Exemplo: página 2 do Referral Program.

### 4.7 Testados e descartados

- Paleta de 6 cores soltas do v1
- Cores muito vivas (estilo ElevenLabs v4): puxam para "app de IA"
- Cor chapada sem gradiente (azul e laranja de fundo inteiro)
- Texturas com letras prensadas (grama, papel de convite): bonitas, mas fora do sistema
- Campos com grade de linhas e bolinhas de hex
- Fundo creme (Parchment `#F9F6F0`): trocado pelo `#F4F3F1`
- Gradientes radiais do Arthur (Night, Dawn, Dusk)
- Degradê Horizonte em faixas e a partir de foto borrada: ficavam chapados ou estranhos
- Gráficos em preto e cinza

---

## 5. Espaçamento e grid

### 5.1 Escala

| Token | Valor | Uso típico |
|---|---|---|
| `space-1` | 4 | Ícone e texto |
| `space-2` | 8 | Rótulo e título de card |
| `space-3` | 12 | Entre botões, entre cards pequenos |
| `space-4` | 16 | Margem e gutter no mobile |
| `space-5` | 24 | Título → lead, gutter no desktop |
| `space-6` | 32 | Lead → botões, padding de card |
| `space-7` | 48 | Margem no desktop, entre blocos |
| `space-8` | 72 | Margem de board, topo de seção no mobile |
| `space-9` | 96 | Padding vertical de seção no desktop |
| `space-10` | 144 | Entre seções grandes, respiro do herói |

### 5.2 Grid

| Tela | Colunas | Gutter | Margem |
|---|---|---|---|
| Desktop 1440 | 12 | 24 | 48 (conteúdo máx. 1344) |
| Tablet 768 | 8 | 16 | 32 |
| Mobile 390 | 4 | 16 | 16 |

Encaixes: destaque em 6 colunas · lista com setas em 4, alinhada à direita · cards de notícia em 4 cada (3 por linha) · texto corrido com no máximo 640px.

### 5.3 Raios

| Raio | Uso |
|---|---|
| 4 | Miniaturas |
| 10 | Cards de interface, cards de notícia, barra de oferta |
| 16–18 | Imagem dentro de card (site no card de preview, imagem dos passos) |
| 24 | Fotos, campos, gradiente, palcos borrados, cards grandes |
| 999 | Botões, selos, círculos |

### 5.4 Posts

Formato 1080 × 1350. Margem 80. Topo e rodapé em mono 24. Stories 1080 × 1920.

---

## 6. Componentes

### 6.1 Botões

Sempre em pill. Sempre um primário por bloco.

| Tamanho | Altura | Uso |
|---|---|---|
| Grande | 52 | CTA principal |
| Médio | 44 | Seções |
| Pequeno | 36 | Navegação |

| Tipo | Fundo claro | Sobre campo, foto ou gradiente |
|---|---|---|
| Primário | Preto, texto branco | Branco, texto preto |
| Secundário | Cinza claro `#EFEEEC` | Contorno branco 1px |
| Contorno | Borda preta 1px | Borda branca 1px |
| Link | Texto + seta "→" | Texto branco + seta |

### 6.2 Círculos

- **Ícone:** círculos de 44–52 com ↗, → ou +.
- **Etapa:** círculos de 34–36 com `01`, `02`, `03` em mono. A etapa atual ou final fica preenchida.
- **Selo:** pill `v1`.

### 6.3 Vidro fosco

**Em pausa.** O vidro saiu dos botões no teste v4 (não agradou). Não usar em nenhuma peça até nova decisão. Referência guardada: fundo branco translúcido (10–18%), blur de 6 a 40px, borda branca de 1px a 22–30%, só sobre foto ou campo.

### 6.4 Lista com setas

Título do item em Inter 550, descrição em cor secundária, seta ↗ ou círculo à direita, linhas separando os itens. Abre com uma linha de 2px preta.

### 6.5 Navegação

Pill flutuante (branca com borda clara) com logo e links, e os dois botões à direita: "Book a 15-minute call" (secundário) e "Get my free preview" (primário). Altura 36–44.

### 6.6 Barra de oferta

Faixa no topo do site com o gradiente Horizonte, texto branco de 14px e um botão contornado pequeno.

### 6.7 Card de notícia

Imagem ou campo com raio 10, rótulo mono, título de card. Três por linha.

### 6.8 Card de passo (landing)

Card branco de raio 24 com uma imagem em cima (raio 18, 8px de margem) que **mostra o que acontece** naquele passo, e embaixo: círculo de etapa + rótulo mono curto ("before any call"), título de card e uma frase.

- 01 · mini card de preview sobre o fundo borrado do venue
- 02 · convite de call de 15 minutos (data num quadrado preto) e um balão de resposta, sobre o fundo borrado
- 03 · o domínio no ar (pílula branca com ponto verde) e "Live." sobre o gradiente Horizonte

Três por linha no desktop, um embaixo do outro no celular. Dados de data e domínio são ilustrativos; nunca usar o domínio real de um cliente sem autorização.

### 6.9 Perguntas (FAQ)

- Duas colunas: à esquerda o título, uma linha de apoio e o **card do Arch** (avatar com a inicial, balão "Something else on your mind?", e-mail selecionável e botão primário); à direita as perguntas num card branco de raio 24.
- Cada pergunta com número mono (01–04) e um círculo cinza com "+", que gira e vira "×" preto quando abre.
- A resposta começa com uma **pílula preta de veredito** ("No.", "Yes.", "No one can.") e depois a explicação em cor secundária.
- No celular, uma coluna só.

### 6.10 Linha do tempo de passos (documento)

Três colunas com os círculos 01, 02, 03 ligados por um traço preto de 1px; o último círculo preenchido. Abaixo de cada um, título 23px e frase curta. Usada na página 3 do Referral.

### 6.11 Órbita de etapas

Carrossel 3D para mostrar etapas ou peças em sequência, adaptado de uma galeria de referência.

- Moldura de raio 24 com o **gradiente Horizonte** escurecendo até um "chão" quase preto embaixo. Sem estrelas, sem verde-esmeralda: a cor vem do Horizonte.
- Cards em retrato (altura = largura × 1,57, de 135 a 168px), raio 18, num arco 3D raso: o do meio fica reto; os das pontas avançam, sobem e giram um pouco. Cada card é o fundo borrado da etapa (4.2.2) ou o Horizonte, com o número em mono no topo e o nome em Inter 550 embaixo, em branco.
- Rótulo mono da etapa acima de cada card (`/01 code`). Embaixo, o **reflexo**: o próprio card invertido, apagando até sumir.
- Rodapé centralizado: contador mono (`03 / 05`), setas em círculo contornado branco, nome e frase da etapa atual, pontos (o ativo vira pílula) e "/drag to explore · pause".
- Gira sem fim (cards reciclados), deriva bem devagar sozinho, para quando o mouse ou o foco estão nela e volta 4,5s depois de qualquer navegação. Arrastar, setas do teclado e pontos. Com reduced-motion fica parada.
- Uso hoje: página How it works, logo abaixo do herói, com as 5 etapas.

---

## 7. Fotografia

### 7.0 Onde a foto entra

Só no feed do Instagram e, talvez, no site. **Nunca em documentos, PDFs ou apresentações**: ali o momento visual é o card de preview, o gradiente Horizonte ou um número grande. A foto do venue só entra em documento quando está tão borrada que vira fundo (4.2.2).

### 7.1 Fórmula

**Lugar real + uma pessoa (ou poucas) com personalidade + um momento comum + um detalhe absurdo tratado como normal.**

É o padrão do feed da Runway: um frame de comercial cinematográfico com humor seco.

### 7.2 Regras

1. **Lugar real do mundo dos venues:** celeiro, salão histórico, gramado de cerimônia, varanda de fazenda, balcão de recepção.
2. **Sempre uma pessoa em cena.** Elenco de rua: idades, etnias e estilos variados, gente com cara de gente. Nada de modelo, nada de maquiagem de festa.
3. **Uma peça de figurino forte** (chapéu de cowboy vermelho, jaqueta college, macacão).
4. **Instante, não pose.** A pessoa está fazendo algo. Atitude, expressão seca.
5. **O absurdo é grande e central** (dezenas de cadeiras caindo do céu, não um fio de extensão no canto).
6. **Objeto que conta a história:** campainha de balcão, folhetos, notebook.
7. **Luz natural com direção:** sol baixo de lado, contraluz, janela forte. Cores vivas, mas naturais, **dentro da paleta Paisagem** (4.2.1): céu azul, verde de mata e grama, marrom moca de madeira, branco de linho. Evitar cores fora disso (rosa, roxo, neon) a não ser na peça de figurino.
8. **Ângulo marcante, um por foto:** de baixo, de cima ou muito aberto.
9. **Espaço livre em cima e embaixo** para a frase dividida.
10. **Sem efeito de cor e sem grão.** A foto fica exatamente como é: limpa e nítida. Nenhum filtro, grade, tom rosado ou ruído por cima. Grão só em último recurso (4.3).
11. **Proibido:** cara de banco de imagem, sorriso posado, close em mãos, logos e texto dentro da imagem, porta.

### 7.3 Geração com IA

- **Modelo para a versão final:** Nano Banana Pro (fal.ai), cerca de US$ 0,15 por imagem.
- **Modelo para testar composição:** Nano Banana (cerca de US$ 0,04). Erra mais nos detalhes.
- **Flux 1.1 Ultra:** descartado, porque deixa as pessoas pequenas e com cara de banco de imagem.
- **Dica:** usar uma foto da Runway como imagem de referência de estilo no modo edição, pedindo para copiar luz e cor, mas não a cena nem o grão do filme.

**Bloco fixo do prompt** (vai no fim de todos):
```
A frame grab from a high-end TV commercial, shot on a digital cinema camera with a 35mm lens, mid-action, deadpan and quietly surreal. Street casting, natural skin texture with pores and wrinkles, minimal makeup, one bold wardrobe piece. Strong natural light from the side, saturated but natural colors in a palette of clear blue sky, deep green trees and grass, warm mocha-brown wood and off-white linen. Clean, sharp, noise-free image with no film grain. Generous empty space at the top and bottom of the frame. Photorealistic. No text, no logos on clothing or objects, no watermark.
```

**Estrutura:** `[cena: lugar + pessoa + ação + absurdo + objeto] + [ângulo] + [bloco fixo]`.

### 7.4 Fotos aprovadas como referência

- A noiva no balcão de hotel histórico, com cinco amigos e família espremidos em volta do notebook (campainha e folhetos na mesa).
- A dona de chapéu vermelho e macacão caminhando entre cadeiras brancas que caem do céu.

---

## 8. Instagram

### 8.1 Perfil

Layout de referência: perfil da ElevenLabs (nome, categoria, uma linha de bio, link). Prévia em `Instagram/00-perfil-preview.png`.

- **Foto:** círculo branco com o lockup `|/ FrontLabs`.
- **Usuário:** @front_labss. **Nome:** FrontLabs. **Categoria:** Web Designer.
- **Bio:** "Online stuff, handled. Go run your business."
- **Link:** nenhum por enquanto. Entra quando houver domínio próprio (site + Linktree).
- **Sem destaques** por enquanto.
- **Grade só com reels** por enquanto: os vídeos prontos sobem como reels e as fotos da marca viram as capas deles. Sem posts estáticos.

**Capa de reel:** 1080 × 1920, foto inteira, texto no formato 1 (frase dividida) ou 2 (lançamento). O grid corta o centro em 3:4 (faixa y 240–1680): todo texto e o lockup ficam entre y 400 e 1520 para não colar na borda nem no ícone de reel. Fontes em `human-output/instagram-fontes/capa-*.html`.

### 8.2 Formatos (exemplos, ainda não definitivos)

Os formatos abaixo foram montados para testar o sistema. Servem de referência, mas ainda não são o padrão fechado do feed.


1. **Foto com frase dividida** (padrão Runway): foto ocupando o post inteiro, frase em Inter 400 branca centralizada, metade em cima e metade embaixo, nunca no meio da foto. Lockup pequeno no rodapé.
2. **Lançamento sobre foto** (padrão "Eleven V4"): "Site Journel" grande no centro com o selo `v1` e uma linha de oferta embaixo.
3. **Frase com tag e círculo:** fundo `#F4F3F1`, nome pequeno no topo, frase central com uma tag em Geist Mono (mesma cor), um círculo de campo embaixo.
4. **Capa de carrossel:** metade de cima com um campo e o nome, metade de baixo com "Introducing…", linha de apoio e a pill "swipe →".
5. **Story com produto:** campo no topo com uma tela de produto encaixada no canto, logo, frase grande e botão preto.

### 8.3 Ritmo do feed

Alternar foto e gráfico na grade, para o perfil não virar um bloco só de fotos nem só de texto.

### 8.4 Legendas

Em inglês. Primeira linha repete a frase do post. Duas ou três frases curtas. Fecha com a ação ("Get your free preview. Link in bio."; enquanto não houver link, "Get your free preview. Send us a DM.") ou com o preço ("$600 once. No monthly fee.").

### 8.5 Vídeo

Mesma regra da foto: a frase de cima entra primeiro (cerca de 0,6s, com leve desfoque), a de baixo em seguida (cerca de 1,2s), as duas seguram e saem juntas. Fluxo: gerar a foto aprovada → animar no Runway, Veo ou Kling (5–8s, câmera lenta) → aplicar o texto com template → som.
Template recomendado: componente `SplitTextReel` em **Remotion** (vídeo, frase de cima, frase de baixo). Alternativa sem código: template salvo no CapCut.

---

## 9. Site e landing

A landing de exemplo (artifact "FrontLabs Landing") é a referência viva desta seção. Ordem das seções:

1. **Navegação:** pílula branca fixa com o logo, três links e os dois botões pequenos.
2. **Herói:** moldura de raio 24 com o **fundo borrado em movimento** (4.2.2), rótulo `/for wedding venues`, "Online stuff, handled." em Display com "Go run your business." como virada, uma frase de apoio, botão branco + botão contorno branco, e o **card de preview** ao lado (ou embaixo, no celular).
3. **Frase de destaque:** uma frase grande em duas cores de peso (preto + `--soft`), em 7 colunas.
4. **Como funciona:** três cards de passo (6.8).
5. **Preço:** card branco do Site Journel v1 ($600, paid once) com o que inclui e os botões; ao lado, card contornado do Care como "coming soon".
6. **Foto em moldura** (se a foto no site for aprovada) com frase grande e virada.
7. **Perguntas** (6.9).
8. **Chamada final:** gradiente Horizonte com título, virada ("Fire your web designer. Politely.") e um formulário com o site atual do venue.
9. **Rodapé:** logo e "Online stuff, handled.".

Regras gerais:

- Foto no site ainda é "talvez". Se entrar, fica em moldura com raio 24 e 24px de respiro.
- Nada de vidro fosco por enquanto (6.3).
- Texto que vai de cinza para preto conforme a rolagem (inspirado na Ploy): opcional.

---

## 10. Documentos (PDF)

- A4, fundo `#F4F3F1`, margens 58 / 72 / 52.
- Topo: lockup pequeno (nome em Bricolage) à esquerda e rótulo mono `/documento · página` à direita, sobre uma linha.
- Rodapé em mono: "Front Labs" e "Online stuff, handled.".
- **Sem foto.** O produto pode entrar, sempre dentro do **card de preview** (10.2), de preferência sobre o fundo borrado do venue (4.2.2).
- **Capa:** título, apoio, sumário com páginas e o card de preview. Nada de bloco vazio com frase solta.
- Tabelas: cabeçalho em mono com linha preta de 1.5px, linhas cinza entre itens, primeira coluna em 550.
- Quando a tabela compara valores, preferir o gráfico de barras com as cores de 4.6.
- No máximo um bloco de gradiente Horizonte por página, sempre com conteúdo dentro (número, preço, frase-chave com explicação).
- Números grandes como momento de impacto (US$15k, US$600).

### 10.1 Regra do espaço vazio

- **Nenhum buraco maior que 12% da altura da página entre dois blocos.** Se sobrar espaço no meio, entra conteúdo real ou um ativo (card de preview, cards de número), nunca um enfeite.
- Blocos seguem o fluxo do texto. Não ancorar um bloco no rodapé com `margin-top:auto` se isso abrir um buraco no meio; a sobra fica no fim da página, antes do rodapé.
- Toda peça passa pela checagem automática (`audit.py`): ela mede o maior vazio entre blocos de cada página e marca o que passar de 12%.

### 10.2 Ativos da marca

O **card de preview** é o principal ativo da FrontLabs: mostra o produto, o site do venue, dentro de uma janela limpa. É o nosso elemento próprio.

| Ativo | Arquivo | Uso |
|---|---|---|
| Card de preview quadrado | `ativos/preview-card-quadrado.png` | Capas, cards laterais, posts |
| Card de preview largo | `ativos/preview-card-largo.png` | Site, documentos em largura total |
| Celular de frente | `ativos/celular-de-frente.png` | Site, posts, apresentações |
| Celular em cena (referência) | `referencias/celular-bella-terra.png` | Só referência interna; a foto de fundo não é nossa |
| Gradiente Horizonte | `gradientes/gradiente-horizonte-*.jpg` | Fundos com conteúdo |
| Componente HTML | `componentes/preview-card.css` + `.snip` | Para montar o card em qualquer página, em escala por `font-size` |

Nos documentos e posts, o card vai **sobre o fundo borrado do venue** (raio 24, rótulo mono branco em cima), não sobre o cinza liso. Peças prontas com essa técnica: `ativos/post-preview-borrado.png`, `post-tour-borrado.png` (agendamento de tour, só para quando o Care existir) e `post-preco-horizonte.png`.

**Anatomia do card:** barra de navegador com três pontos e rótulo mono (`preview · Nome do venue · Cidade`), a home real do site em moldura de 16, três blocos com dados reais do venue (rótulo mono + valor em Inter 550) e a etiqueta "preview ready before the call" com ponto verde. Sempre com dados reais de um cliente; nunca inventar venue em peça externa, e confirmar com o cliente antes de usar o site dele fora da empresa.

**Testado e descartado:** transformar todo conteúdo do documento em "janela" (barra de navegador em tudo). A barra e a linha de status ficam só no card de preview.

### 10.3 Documentos prontos

| Documento | Páginas | Destaques |
|---|---|---|
| A Empresa (interno) | 8 | Capa com sumário e card de preview; tabelas Thiel e dor × solução; preço US$600; fluxo da máquina de venda; números; linhas da marca |
| Referral Program (cliente, inglês) | 3 | Capa com card sobre fundo borrado; $70 off e 10% off; gráfico de barras do que se paga; linha do tempo de 3 passos; o que o amigo recebe; contato do Arch |

---




## 11. Tokens (CSS)

```css
:root{
  /* neutros */
  --bg:#F4F3F1; --card:#FFFFFF; --line:#E3E1DD; --grey:#EFEEEC;
  --ink:#0A0A0A; --mute:#6B6966; --soft:#9A9792;
  --ok:#2F7F5E; /* ponto de status */

  /* paleta Paisagem (só imagem, gradiente e gráfico) */
  --p-ceu:#1F6F9E; --p-ceu-claro:#86AABB; --p-mata:#1A2018; --p-grama:#667235;
  --p-musgo:#36451A; --p-moca:#836A4E; --p-madeira:#402F1D; --p-linho:#DED5C9;

  /* gráficos (ordem fixa) */
  --chart-1:#1F6F9E; --chart-2:#748A2C; --chart-save:#836A4E;

  /* fundos */
  --bg-horizonte:url(gradiente-horizonte-16x9.jpg) center/cover;
  --bg-borrado:url(venue-blur.jpg) center/cover; /* foto do venue borrada */

  /* campos (legado, em aberto) */
  --night-1:#2F4BD6; --night-2:#1D2D80; --night-3:#121A3A;
  --sage-1:#2F7F5E;  --sage-2:#235E47;  --sage-3:#173F33;
  --amber-1:#C4562A; --amber-2:#7A3218; --amber-3:#3A1A12;

  /* tipografia */
  --font-sans:"Inter",-apple-system,system-ui,sans-serif;
  --font-mono:"Geist Mono",ui-monospace,monospace;
  --font-brand:"Bricolage Grotesque",system-ui,sans-serif; /* só no nome */
  --weight-title:550; --weight-text:400; --weight-brand:800;
  --track-title:-0.045em; --track-name:-0.025em; --track-brand:-0.05em;
  --opsz-text:"opsz" 14; --opsz-brand:"opsz" 96;

  /* espaço */
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:24px;
  --space-6:32px; --space-7:48px; --space-8:72px; --space-9:96px; --space-10:144px;

  /* raios */
  --r-thumb:4px; --r-ui:10px; --r-inner:18px; --r-media:24px; --r-pill:999px;

  /* botões */
  --btn-lg:52px; --btn-md:44px; --btn-sm:36px;
}
```

---

## 12. Registro de decisões

| # | Decisão | Antes | Por quê |
|---|---|---|---|
| 1 | Títulos em Inter 550 | Inter 500 com dois tons | Mais peso e presença, como Apple e Runway |
| 2 | Uma cor por título | Frase metade preta, metade cinza | Mais limpo; a virada vira linha de apoio |
| 3 | Descrição em Inter 400, tamanho ótico de texto | Inter 500 apertada | Separa título e descrição sem trocar de fonte |
| 4 | Geist Mono só em rótulos | Igual | Mantido |
| 5 | Sem serifada, sem texto em gradiente | Testados | Fugiam do clean |
| 6 | Nomes sobre campo com regra própria (400, apoio em 300 apagado) | Nomes em 550 | Ficavam pesados demais |
| 7 | Logo versão A | Variações testadas | A original já funciona |
| 8 | Porta removida da marca | Era candidata a elemento | Não tem a ver com a FrontLabs |
| 9 | Campos monocromáticos (sem grão desde a #31) | 6 cores soltas e manchas | Mais sóbrio (hoje em aberto, substituídos pelo Horizonte nas peças) |
| 10 | Fundo `#F4F3F1` | Branco puro, depois creme | Menos "documento padrão", sem puxar para o amarelo |
| 11 | Foto em moldura com raio 24 no site | Foto de fundo inteiro | Lição da Ploy: cara de produto, não de template |
| 16 | Sem foto em documentos e PDFs | Capa com foto | Foto é do feed e, talvez, do site |
| 12 | Fotografia: lugar real + pessoa + absurdo | Fotos genéricas de venue | Padrão Runway, reconhecível no feed |
| 13 | Foto sem efeito de cor | Grade night/amber | A imagem fica como é |
| 14 | Botões em três tamanhos | Tudo em 52 | Navegação e seções pediam botões menores |
| 20 | Nome FrontLabs em Bricolage Grotesque 800 | Inter 550 | Mais assinatura, sem virar outra marca |
| 23 | Card de preview como elemento próprio da marca | Busca por "balão" ou pílula | É o produto em cena, nosso melhor ativo |
| 24 | Nenhum vazio maior que 12% entre blocos | Blocos ancorados no rodapé | Abria buracos no meio da página |
| 22 | Gradiente só atrás de conteúdo | Blocos grandes decorativos na capa e no fechamento | Ficava um espaço vazio sem função |
| 21 | Título numa cor só, sem fundo atrás de palavra | Palavra dentro de pílula (teste v4) | Ficou carregado |
| 15 | Botões chapados preto e branco, sem vidro | Vidro sobre foto | Não agradou no teste v4 |
| 17 | Paleta Paisagem só para imagens e gradiente | Gradientes do Arthur em teste | Unifica o feed; a interface segue preto e branco |
| 18 | Gradiente Horizonte como único gradiente | Radiais Night, Dawn, Dusk | Saiu do teste v4 e agradou |
| 19 | Foto limpa, sem grão (revisada pela #31) | Grão fino na foto | O grão fino era a textura analógica; saiu em 13/10 |
| 25 | Card de preview sobre a foto do venue borrada | Card sobre cinza liso | Mais vida, mesma família da landing |
| 26 | Gráficos com céu e grama (moca para economia) | Barras preto e cinza | Preto e cinza ficava cru |
| 27 | Passos da landing como cards com imagem do momento | Lista com círculos | A lista ficava crua |
| 28 | FAQ em duas colunas com card do Arch e pílula de veredito | Lista simples | Resposta direta e um contato humano |
| 29 | Barra de navegador só no card de preview | "Janela" em todo conteúdo | Ficou exagerado |
| 30 | Órbita de etapas no How it works (6.11) | Só as linhas por etapa | Mostra as 5 etapas de uma vez, com movimento; a galeria de referência foi refeita com o Horizonte e os fundos borrados no lugar do verde-esmeralda e das estrelas |
| 31 | Sem grão; só em último recurso (4.3) | Grão em todo campo, foto, gradiente e fundo borrado | Deixava todas as fotos granuladas demais; a imagem limpa e nítida passa a ser o padrão |
| 32 | Instagram só com reels, capas feitas com as fotos da marca, perfil no layout da ElevenLabs, sem link até ter domínio (8.1) | 5 posts estáticos + reel | Os vídeos prontos carregam a marca melhor; as fotos ganham uso como capa |

## 13. Em aberto

- Peças feitas antes da decisão #31 ainda têm grão: os posts de `Instagram/` (o `post.css` aplica grão no Horizonte e nas fotos) e os takes que pediram "film grain" no prompt. O Reel `Vídeos/06-introducing-frontlabs.mp4` fica como está, por decisão do Arthur.
- Campos Night, Sage e Amber: recolorir com a paleta Paisagem ou aposentar de vez.
- Desenhar a logo final com a Bricolage e o símbolo (ajuste fino).
- "Front Labs" ou "FrontLabs" no texto corrido.
- Formatos do Instagram: os atuais são exemplos, falta fechar o padrão.
- Foto no site: entra ou não.
- Refazer os posts atuais com as fotos sem efeito de cor e regerar as cadeiras no modelo Pro.
- Referral: os exemplos de desconto usam um projeto de $450; o Site Journel custa $600.
- Autorização do Bella Terra para usar a home do site em peças externas.
- Aplicar a regra do espaço vazio e os ativos novos também à apresentação.

---

## 14. Kit da marca

`FrontLabs-Brand-Kit.zip`:

| Pasta | O que tem |
|---|---|
| `DESIGN.md` | Este arquivo |
| `logo/` | Lockup preto e branco (PNG) e o símbolo em SVG |
| `ativos/` | Card de preview quadrado e largo, celular de frente, posts com card sobre fundo borrado e sobre o Horizonte |
| `gradientes/` | Gradiente Horizonte em 16:9, 4:5 e 9:16 |
| `componentes/` | `preview-card.css` + `.snip`, imagens do site e do fundo borrado, `audit.py` |
| `documentos/` | A Empresa e Referral Program |
| `referencias/` | Só referência interna (celular em cena) |

Peças vivas (artifacts): "FrontLabs Landing", "FrontLabs Design System" (prancha), "FrontLabs · O que mudou" (apresentação, ainda na v3).
