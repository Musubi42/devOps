---
title: Portainer
upload_file: d
---
## Installation

### P﻿rerequisite

* [Docker and Docker-ce](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-10)

## D﻿eployment

[Official Portainer documentation](https://docs.portainer.io/start/install-ce/server/docker/linux)

U﻿se this `docker-compose.yaml`\
M﻿y [**GitHub** repo](https://github.com/Musubi42/devOps/tree/portainer) with my **Portainer configuration**.

```yaml
version: '3.3'

services:
  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    command: -H unix:///var/run/docker.sock
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./volumes/portainer_data:/data
    # environment:
    #   - VIRTUAL_HOST=portainer.musubi.dev
    #   - VIRTUAL_PORT=9000
    ports:
      - 9443:9443
    environment:
      url: https://portainer.musubi.dev
    restart: unless-stopped
    networks:
      - npm_network

networks:
  npm_network:
    dirver: bridge
```

A﻿s I expose all my services through a Reverse Proxy ([NPM](https://docs.musubi.dev/docs/How%20to/cicd/nginx_proxy_manager)), don't forget to create a **network**.

I﻿n my case I called it, `npm_network`, but  that could be any name that feet your needs.

```yaml
...
  npm_network:
    driver: bridge
```

T﻿he `driver` is set as `bridge`, so any containers with the same network can communication with one each other.

## S﻿tandard setup of a service with Portainer (recommanded)

Clone the **devOps** project : 

```shell
git clone https://github.com/Musubi42/devOps.git
```

C﻿reate a  ***clean*** **new branch** without any git history. The name of the branch must be to describe which service will be it used for.

T﻿he brand name of the container service should do the trick.

```
git checkout --orphan <your_service_name>
```

D﻿elete every folder/file, except the `.git` folder.

```
find . -not -name .git -delete
```

This command find every file and folder in the current directory, exclude by the name the `.git` folder and delete the rest. 

### S﻿tandard compose file

```yaml
version: '3.3'
services:
  <your_service_name>: # Not muh importance 
    image: louislam/uptime-kuma:latest # Get the image you want from the docker-hub
    container_name: uptime-kuma # The name that will be shown by the commande docker ps
    ports:
      - 44:3001 # host_port:container_port
    volumes:
      - /opt/portainer/uptime-kuma:/app/data # host_volume:container_volume
    networks:
      - npm_networks # The network of my reverse proxy
    restart:
      unless-stopped # restart unless I command it to stop 

networks:
  npm_network:
    driver: bridge # Specify how the network must communicate
```

### D﻿eploy the service from Portainer

G﻿o to [Portainer > Stacks > Add stack](https://portainer.musubi.dev/#!/1/docker/stacks/newstack)

![Portainer example on how to create a task with uptime-kuma](/img/portainer_create_stack.png "Portainer stack creation")

### E﻿xpose a newly created service to Internet with NPM

[R﻿efer to this doc, to expose a service with NPM](https://docs.musubi.dev/docs/How%20to/cicd/nginxproxymanager)

### T﻿roubleshoot a container deployed with Portainer

G﻿o to [Portainer > Container](https://portainer.musubi.dev/#!/1/docker/containers)

F﻿rom there, you can access multiple useful information from the container and  start doing some changes.

![Portainer container information](/img/portaier_container_list.png "Portainer container list")

O﻿n the **quick action** column, from left to right :

* *L﻿ogs* of the container (the same logs you have when you run a docker without the -d option)
* *I﻿nspect* the container (the same output as the `docker inspect` command)
* *S﻿tats* of the container, memory usage, CPU usage, Network usage, I/O usage and a list of the process runned by the container
* *E﻿xec console*, will create a terminal from there I can execute command in the container (the same as `docker exec -it 75d2a81b2916 /bin/sh`) \
  **!﻿NOT WORKING!**
* *C﻿ontainer console, IDK*



## S﻿ervices I've already setup

* [U﻿ptime-kuma](https://docs.musubi.dev/docs/How%20to/cicd/portainer#uptime-kuma-installation)
* N﻿PM



### U﻿ptime-kuma installation

```
version: '3.3'
services:
  your_service_name: 
    image: louislam/uptime-kuma:latest
    container_name: uptime-kuma
    ports:
      - 44:3001
    volumes:
      - /opt/portainer/uptime-kuma:/app/data
    networks:
      - npm_network
    restart:
      unless-stopped

networks:
  npm_network:
    driver: bridge
```

## Setup a container without portainer (*not recommanded*) 

Download the content of the `uptime-kuma` branch, from the [devOps repo](https://github.com/Musubi42/devOps/tree/uptime-kuma)

```shell
degit Musubi42/devOps#uptime-kuma ./uptime-kuma
```

I﻿n the `docker-compose.yaml`, c﻿hange the ports and volumes according to your needs.