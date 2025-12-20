# Base image
FROM node:22.16-bullseye

# Set working directory
WORKDIR /app

# Install sqlite3 CLI
RUN apt-get update && apt-get install -y sqlite3 && rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Set environment variable to increase memory for Strapi build (if needed)
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Build Strapi admin (optional, only needed if you change plugins/admin)
RUN npm run build

# Expose Strapi port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
