



# prerequisites

* Install Docker and Docker-ce
* Install ufw (easy to use firewall)


# Installation

## Docker configuration

To communicate data between container, we will use `docker network` :
```bash
docker network create traefik
```


## Docker compose

Here a basic `compose` to run Traefik, and have access to the dashboard.

```bash
version: '3'
services:
  proxy:
      image: traefik:latest
      container_name: "traefik"
      networks:
        - traefik
      ports:
        - "80:80" # HTTP
        - "443:443" # HTTPS
        # Epitech
        # Je pourrais utiliser un port privilégié pour certaine utilisation, mais le 443 est pas mal
      volumes:
        # Pour gérer les certificats
        - ./letsencrypt:/letsencrypt
        # Pour charger la config de l'api, middleware, auth... Example
        # - ./dynamic.yml:/dynamic.yml
        # Pour faire le htaccess
        - ./users.u:/users.u
        - /var/run/docker.sock:/var/run/docker.sock:ro
      restart: unless-stopped
      command:
        #- "--log.level=DEBUG"
        # Docker configuration
        - "--providers.docker=true"
        - "--providers.docker.exposedbydefault=false"
        - "--providers.docker.network=traefik"
        # Configure entrypoint
        - "--entrypoints.web.address=:80"
        - "--entrypoints.websecure.address=:443"
        # SSL configuration
        - "--certificatesresolvers.letsencryptresolver.acme.httpchallenge=true"
        - "--certificatesresolvers.letsencryptresolver.acme.httpchallenge.entrypoint=web"
        #- "--certificatesresolvers.letsencryptresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"
        - "--certificatesresolvers.letsencryptresolver.acme.email=raphaelthi59@gmail.com"
        - "--certificatesresolvers.letsencryptresolver.acme.storage=/letsencrypt/acme.json"
        # Global HTTP -> HTTPS
        - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
        - "--entrypoints.web.http.redirections.entryPoint.scheme=https"

        # Express API example
        # - "--providers.file.filename=/dynamic.yml"
        # Enable dashboard
        - "--api.dashboard=true"
      labels:
        - "traefik.enable=true"
        # Configuration Dashboard
        - "traefik.http.routers.dashboard.entrypoints=websecure"
        - "traefik.http.routers.dashboard.tls.certresolver=letsencryptresolver"
        - "traefik.http.routers.dashboard.service=api@internal"
        # - "traefik.http.routers.dashboard.middlewares=dashboard-auth"
        # - "traefik.http.middlewares.dashboard-auth.basicauth.usersfile=/users/users.u" # htaccess
        - "traefik.http.routers.dashboard.rule=Host(`traefik.musubi.dev`)"
        - "traefik.http.services.dashboard.loadbalancer.server.port=8080"
        # WatchTower auto update
        # TODO: Check for non interrupting update
        - "com.centurylinklabs.watchtower.enable=true"

networks:
  traefik:
    external: true # Utiliser ce network pour rendre un service accessible publiquement
  internal:
    external: false # Utiliser ce network pour faire communiquer les services entre eux de manière interne, dans un même docker compose
```

Start Traefik with :
```bash
docker compose up -d
```

