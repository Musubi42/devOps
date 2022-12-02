# devOps


## Nextcloud

### Docker-compse 

Add to nextcloud the network of NPM

```docker
...
    networks:
      - npm_network


networks:
  npm_network:
    driver: bridge
```

### .env

Copy the `.env.example` and rename it `.env`

```bash
mv .env.example .env
```

### Open port

```bash
sudo ufw allow 8080
```

S'empblerait qu'on est pas besoin d'ouvrir le port de la BDD pour que Nextcloud fonctionne normalement, ce qui est plutot cohérent
