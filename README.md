# Bootcamp Helper — Extensão Chrome (Manifest V3)


Extensão exemplo utilizada como entrega do Bootcamp II.


## O que faz
- Popup com comunicação com o service worker (ping)
- Armazenamento de uma nota rápida com `chrome.storage.local`
- Content script opcional que destaca links em páginas alvo
- Options page simples para habilitar/desabilitar recurso


## Como instalar localmente
1. Clone o repositório
2. Acesse `chrome://extensions` no Chrome
3. Ative **Developer mode**
4. Clique em **Load unpacked** e selecione a pasta raiz do projeto (onde está `manifest.json`)


## Publicar no GitHub Pages
- Opção A (recomendada): Usar a pasta `/docs` do branch `main` (Settings → Pages → Branch: main / Folder: /docs).
- Opção B: criar branch `gh-pages` com `index.html` na raiz do branch.


## Release (.zip)
- Criar Release no GitHub ou gerar um .zip com os arquivos necessários (excluir node_modules se houver).
- Incluir instruções de instalação manual na descrição da Release.


## Licença
MIT — ver LICENSE
