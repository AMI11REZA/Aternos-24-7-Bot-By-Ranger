FROM node:18-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install && npm cache clean --force

COPY index.js .

CMD ["node", "--expose-gc", "--max-old-space-size=60", "index.js"]
