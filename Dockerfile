FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY index.js .

CMD ["node", "--expose-gc", "--max-old-space-size=60", "index.js"]
