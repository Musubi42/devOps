# devOps


## Teleport

Add the network of the NPM

```docker
...
    networks:
      - npm_network

networks:
  npm_network:
    diver: bridge
```

### Open Port

```bash
sudo ufw allow 3080
```