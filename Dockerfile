# Etapa base
FROM mcr.microsoft.com/playwright:v1.45.0-focal

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Instala o navegador e dependências do Chromium
RUN npx playwright install --with-deps chromium

# Executa os testes automaticamente ao rodar o container
CMD ["npm", "test"]
