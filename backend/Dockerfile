# backend/Dockerfile
FROM node:22.16-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=2048"

EXPOSE 1337
CMD ["npm", "run", "start"]
