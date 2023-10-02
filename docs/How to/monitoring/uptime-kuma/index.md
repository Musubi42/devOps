---
title: Monitoring - uptime-kuma
upload_file: a
---
# P﻿rerequisites

* A﻿ Telegram account.
* A﻿ server is docker & docker compose installed.
* A﻿ Traefik setup.

# D﻿eploy Uptime-kuma

C﻿reate a `docker-compose.yaml` file.

```yaml
version: '3.3'
services:
  uptime-kuma:
    image: louislam/uptime-kuma:latest
    container_name: uptime-kuma
    volumes:
      - ${uptime_kuma_volume_dev}
    networks:
      - traefik
    labels:
      - ${traefik_enable}
      - ${traefik_http_routers_rule}
      - ${traefik_http_router_entrypoints}
      - ${traefik_http_routers_tls}
      - ${traefik_http_routers_tls_certresolver}
      - ${traefik_http_services}
      # TODO: Check for non interrupting update
      - ${watchtower_auto_update}
    restart: unless-stopped

networks:
  traefik:
      name: traefik
      external: true

```

I﻿n the same folder, create an `.env` file like this :

```shell
# Volumes path
uptime_kuma_volume_prod="<HOST_VOLUME_PATH>:/app/data"
uptime_kuma_volume_dev="<HOST_VOLUME_PATH>:/app/data"
# Labels
traefik_enable="traefik.enable=true"
traefik_http_routers_rule="traefik.http.routers.uptime_kuma.rule=Host(`<YOUR_DOMAIN>`)"
# - "traefik.http.routers.uptime-kuma.entrypoints=https"
traefik_http_router_entrypoints="traefik.http.routers.uptime_kuma.entrypoints=websecure"
traefik_http_routers_tls="traefik.http.routers.uptime-kuma.tls=true"
traefik_http_routers_tls_certresolver="traefik.http.routers.uptime_kuma.tls.certresolver=letsencryptresolver"
traefik_http_services="traefik.http.services.uptime_kuma.loadbalancer.server.port=3001"

```

## S﻿etup Notification with Telegram bot

**T﻿elegram** offers a free API to create a **bot**.

W﻿e need :

* A﻿n **API Token** of a dedicated chat
* **C﻿hat ID** of the dedicated chat

### C﻿reate Bot

G﻿o to [Telegram botFather](https://t.me/BotFather)

\
S﻿tart the bot with the command below, and follow the instructions

```shell
/newbot
```

At the end of the configuration, you'll get the something like this.

![BotFather - new bot created](/img/telegram_bot_created.png "BotFather")

Y﻿ou can get at any time the API token from [botFather](https://t.me/BotFather) with this command :

```
/mybots
```

### G﻿et chat ID

T﻿his command will get the 

```shell
curl -s "https://api.telegram.org/bot<API_TOKEN>/getUpdates" | jq -r '.result[0].message.from.id'
```

#### **Troubleshooting**

O﻿n the telegram app, go to the bot channel and delete every message

You can also try,

* removing your bot from the group,
* and then re adding your bot to the group,
* selecting it from the group members list,
* send it a new message,
* then try the `getUpdates`url again.

.