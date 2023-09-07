---
title: How to delete app version and application
upload_file: uploads/choose_region.png
---
# Prerequisites

T﻿he apps are stored in AWS, in the **[team-module](https://marjory.awsapps.com/start#/)** account.

D﻿epending on the stage of the app it's a different region :
*﻿ Paris - prod
*﻿ Virginie nord - dev/preprod
*﻿ Frankfurt - staging


:::

:::info
-1 To be able to delete an app all his version's must be private.
-2 To delete an application, you must first delete all its versions



:::

## ﻿Delete all app version

### G﻿et all versions id

```shell
curl --location 'https://marjory-factory-api.io/v2/applications/<Application_slug>' \
--header 'Authorization: Bearer <Marjory_token_of_the_tenant_where_the_app_is_installed>' \
| jq | jq '.versions | to_entries[] | "\(.key): \(.value)"'
```

From the result, we want to retrieve all the version's id :

```jsonc
...
  "reference": "catalog#app-digest",
  # What we are looking for
  "versions": {
    "0.3.0": "e4599bea-9d05-42ee-986e-70cb5a545f6f",
    "0.4.0": "65e31300-4e17-41ba-b304-6f632cebce1b"
  },
  "updatedAt": 1680619682013,
...
```

### How to get application ID

```shell
curl --location 'https://marjory-factory-api.io/v2/applications/<Application_slug>' \
--header 'Authorization: Bearer <Marjory_token_of_the_tenant_where_the_app_is_installed>' \
| jq | jq '.id | to_entries[] | "\(.key): \(.value)"'
```

From the result, we want to retrieve the application's id :

```jsonc
...
{
    "slug": "cxmp_bug_comexposium",
    "createdAt": "2023-08-31T14:52:50.837Z",
    "main": "42e4a04a-1623-43e8-a9b3-e7d2ccc7e336",
    "id": "bf31a10d-9abc-424f-a47f-74ead9fd8fa0",
    "name": "cxmp_bug_comexposium",
}
...
```

### P﻿rerequisites to delete all the versions

F﻿or a version to be deleted, her **visibility** must be **private** otherwise you won't be able to delete it.\
I﻿n the *[factory-service-deployment-and-versioning](https://gitlab.com/marjory/factory/factory-service-deployment-and-versioning/-/blob/main/src/versions/versions.controller.ts)* there is no endpoint that allow us to change the visibility of a version. So we must change the visibility in DynamoDB.

T﻿o do so :

G﻿o to the Marjory AWS account, choose **team-module**.

From the AWS Management console, choose the right region :

![How to choose a region](https://raw.githubusercontent.com/Musubi42/devOps/musudoc/docs/Marjory/appbuilder/howtodeleteapp/uploads/choose_region.png)

G﻿o to DynamoDB (you can access it from the search bar)

F﻿rom DynamoDB, click on *Explore items* :

![Click on explore items](/img/screenshot-from-2023-07-12-17-48-24.png "Explore Items")

G﻿o to the **factory-prod-version** table.

![](/img/screenshot-from-2023-07-13-15-55-31.png "factory-prod-version dynamoDB table")

F﻿ilter on the attribute **id**, the value is the id of the *public version* of the app you want to delete.\
I﻿n general the last version is the one who is *public.* ([How to get all the app's version](https://docs.musubi.dev/docs/marjory/appbuilder/howtodeleteapp/#get-all-versions-id))

![](/img/screenshot-from-2023-07-13-15-55-14.png "Filter on the id version")

N﻿ow change the version from public to private.

![](/img/screenshot-from-2023-07-13-16-01-30.png "Change the visibility to private")

 ﻿You can check on the Marjory front if all the versions of an app are private

![](/img/screenshot-from-2023-07-13-16-04-35.png "Check version visibility")

### D﻿elete a version

T﻿o be deleted, a version must be **private.**

```shell
curl --location --request DELETE 'https://marjory-factory-api.io/v2/versions/<the_version_id_we_want_tot_delete> \
--header 'Authorization: Bearer <Marjory_token_of_the_tenant_where_the_app_is_installed>'
```

### D﻿elete the app 

```shell
curl --location --request DELETE 'https://marjory-factory-api.io/v2/applications/:applicationId' \
--header 'Authorization: Bearer <Marjory_token_of_the_tenant_where_the_app_is_installed>'
```

T﻿he result will be HTTP 204 no content.
