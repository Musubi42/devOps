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

