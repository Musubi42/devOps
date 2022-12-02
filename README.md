# devOps

## Portainer

Add the network of the NPM

```docker
...
    networks:
      - npm_network

networks:
  npm_network:
    # external: true
    diver: bridge
```