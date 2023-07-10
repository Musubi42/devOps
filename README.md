# DevOps

## Uptime-kuma

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

Add a new UFW profile
```bash
[MUSUBI_UPTIME-KUMA_44]
title=uptime kuma
description=A fancy self-hosted monitoring tool
ports=44
```

```bash
sudo ufw allow MUSUBI_UPTIME-KUMA_84
```