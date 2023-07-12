---
title: How to delete app version and application
upload_file: uploads/choose_region.png
---
# Prerequisites

T﻿he apps are stored in AWS, in the **[team-module](https://marjory.awsapps.com/start#/)** account.

D﻿epending on the stage of the app it's a different region :
-﻿ Paris - prod
-﻿ Virginie nord - dev/preprod
-﻿ Frankfurt - staging

## ﻿Delete the app version ?

### G﻿et all versions id

```shell
curl --location 'https://marjory-factory-api.io/v2/applications/app-digest' \
--header 'Authorization: Bearer <Marjory_token_of_the_tenant_where_the_app_is_installed> \
| jq | grep versions
```

T﻿he result must be something like this :



## ﻿How to delete an application of the Marjory app store