---
sidebar_position: 1
title: Deploiement
--- 

# Prerequisites

* [Install Docker and Docker-ce](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-10)
* [Install and configure Traefik](https://docs.musubi.dev/docs/How%20to/server/Server/Reverse%20proxy/Traefik)
* **Create a recoed A for your API sub-domain, it must point to your server hosting the API**
  Example : api.example.com

# Conteneurisation

Déploiement de l'API sur un VPS,
J'utilise un reverse proxy, pour exposer plusieurs services distincts utilisant HTTP et HTTPS depuis le même server.
Pour cela j'utilise Traefik, cette solution requiert que les apps je veux déployer soient conteneurisé.

## Clone the project 

Clone the Project and go to the `API` folder.

```bash
git clone https://github.com/EpitechMscProPromo2025/T-DEV-700-LIL_1.git
```

## Create an image (Dockerfile)

Create a `Dockerfile` with this content :

```bash
# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json* ./

# Clean install of the dependencies
RUN npm ci && npm cache clean --force

RUN npm install -g tsoa

# Copy your application code into the container
COPY . .

ENV GOOGLE_APPLICATION_CREDENTIALS=./pwa---cash-manager-firebase.json

# Expose the port your app runs on
EXPOSE 8080

# Define the command to start your app
# CMD ["node", "index.js"]
CMD ["npm", "run", "serve"]
```

## docker-compose

Create a `docker-compose.yml` with this content :
```bash
version: '3'
services:
  pwa-api:
    build: .
    labels:
      - "traefik.enable=true"
      # WEB
      - "traefik.http.routers.pwa-api.rule=Host(`pwa.musubi.dev`)"
      - "traefik.http.routers.pwa-api.entrypoints=web"
      - "traefik.http.routers.pwa-api.middlewares=https-redirect@file"
      # Secure
      - "traefik.http.routers.pwa-api-secure.rule=Host(`pwa.musubi.dev`)"
      - "traefik.http.routers.pwa-api-secure.entrypoints=websecure"
      - "traefik.http.routers.pwa-api-secure.tls=true"
      - "traefik.http.routers.pwa-api-secure.tls.certresolver=letsencryptresolver"

      - "traefik.http.routers.pwa-api-secure.service=pwa-api"
      - "traefik.http.services.pwa-api.loadbalancer.server.port=8080"

      # BasicAuth
      # - "traefik.http.routers.express-api.middlewares=express-api-auth"
      # - "traefik.http.middlewares.express-api-auth.basicauth.usersfile=/users/raph.u" # htaccess
    networks:
      - traefik

networks:
  traefik:
    external: true # Utiliser ce network pour rendre un service accessible sur publiquement
```

## Run the API and therefore expose it

```bash
docker compose up --build
```
