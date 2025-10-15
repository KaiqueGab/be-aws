FROM node:20.18 AS base

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

FROM gcr.io/distroless/nodejs22-debian12 AS deploy

WORKDIR /usr/src/app

USER 1000

COPY . .
COPY --from=base /usr/src/app/node_modules ./node_modules

EXPOSE 3333

CMD ["server.js"]
