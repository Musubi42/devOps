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
