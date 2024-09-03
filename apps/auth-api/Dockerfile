# Build Application Image
From node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build auth-api

RUN npm prune --production

# Real Application Image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000


CMD ["node", "dist/apps/auth-api/main.js"]