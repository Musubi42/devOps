---
title: Portainer
upload_file: d
---
## Install Portainer

### P﻿rerequisite

- [Docker and Docker-ce](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-10)
-﻿ [npm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
-﻿ [Degit](https://github.com/Rich-Harris/degit#installation)
 ﻿ ```shell
 ﻿ npm install -g degit
 ﻿ ```


#﻿## Installation without portainer (*not recommanded*)

Download the content of the uptime-kuma branch to a dedicated repo.
`﻿``shell
degit Musubi42/devOps#uptime-kuma ./uptime-kuma
`﻿``

I﻿n the `docker-compose.yaml`, c﻿hange the ports and volumes ccording to your needs.

#﻿## Installation with Portainer (*recommanded*)

