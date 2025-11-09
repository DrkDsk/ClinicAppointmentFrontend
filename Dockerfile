# Usa la imagen oficial de Node.js 20 con Alpine (más liviana)
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código
COPY . .
