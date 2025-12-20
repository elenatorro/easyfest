
FROM node:22.16-bullseye

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "build/index.js"]
