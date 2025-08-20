FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm ci --omit=dev


CMD ["node", "--expose-gc", "index.js"]
