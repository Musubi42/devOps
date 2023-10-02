---
title: Server security
upload_file: d
---
:::note TODO\
D﻿écider d'une stratégie propre\
:::

C﻿lamscan

l﻿aunch a scan every day with crontab

C﻿heck for summary with detected virus detected

```shell
awk -v RS="\n\n" '/Infected files: [^0]/' virus.log.
```