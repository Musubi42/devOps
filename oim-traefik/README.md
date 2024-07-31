## How to generate the basic auth

```shell
echo $(htpasswd -nb <user> <password>) > users.u
```