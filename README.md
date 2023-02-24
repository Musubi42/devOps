# devOps

## Nginx Proxy Manager

Create a network so every service with NPM to be accessible 

```docker 
docker netword create npm_network
```

And this network to all services that need to be accessible on the net

```docker
...
    networks:
      - npm_network

networks:
  npm_network:
    driver: bridge
```

### Open port

```bash
sudo ufw allow 81 \
sudo ufw allow 80 \
sudo ufw allow 443
```
## For non docker project do...

### conrad-edison

```bash 
Toute la conf qui va bien
```