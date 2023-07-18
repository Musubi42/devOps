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

Edit `/etc/ufw/applications.d/ufw-oim`, add this :
```bash
[MUSUBI_DUPLICATI_45]
title=duplicati
description=Backup
ports=45
```

```bash
sudo ufw allow MUSUBI_DUPLICATI_45
```

