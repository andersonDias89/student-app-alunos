# Usar a imagem oficial do Node.js como imagem base
FROM node:14

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências do projeto
RUN npm install

# Copiar os arquivos restantes do projeto para o container
COPY . .

# Construir o aplicativo para produção
RUN npm run build

# Instalar o servidor HTTP para servir o build do React
RUN npm install -g serve

# Comando para iniciar o app
CMD ["serve", "-s", "build"]
