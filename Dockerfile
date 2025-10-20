FROM mcr.microsoft.com/playwright:v1.46.0-jammy

WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
RUN npx playwright install --with-deps chromium

COPY . .
RUN node scripts/build-extension.mjs

CMD ["npm", "test"]

# Usa a imagem oficial do Playwright (já vem com o Chromium instalado)
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos do projeto
COPY package*.json ./

# Instala as dependências do projeto
RUN npm ci --silent

# Garante que os navegadores e dependências do Chromium estão disponíveis
RUN npx playwright install --with-deps chromium

# Copia todo o restante do projeto
COPY . .

# Faz o build da extensão (gera dist/ e o zip)
RUN node scripts/build-extension.mjs

# Define o comando padrão ao rodar o container
CMD ["npm", "test"]
