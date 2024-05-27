# Usar la imagen base de Node.js
FROM node:14

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración
COPY package.json ./
COPY package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . ./

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 10000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "startProd"]
