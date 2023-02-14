FROM node:16-alpine AS build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ARG NODE_ENV
ARG DATABASE_URL
ARG NODE_ENV
ARG PORT=3000
ARG POSTGRES_DB_USER
ARG POSTGRES_DB_PASSWORD
ARG POSTGRES_DB_HOST
ARG POSTGRES_DB_PORT
ARG POSTGRES_DB_NAME
ARG DB_ENGINE

ENV NODE_ENV=$NODE_ENV
ENV DATABASE_URL=$DATABASE_URL
ENV PORT=$PORT
ENV POSTGRES_DB_USER=$POSTGRES_DB_USER
ENV POSTGRES_DB_PASSWORD=$POSTGRES_DB_PASSWORD
ENV POSTGRES_DB_HOST=$POSTGRES_DB_HOST
ENV POSTGRES_DB_PORT=$POSTGRES_DB_PORT
ENV POSTGRES_DB_NAME=$POSTGRES_DB_NAME
ENV DB_ENGINE=$DB_ENGINE


COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run migrations:run

EXPOSE 8080

CMD ["npm", "start"]