Pour lancer hoppscotch il faut :
Récupérer les secrets du projet depuis Infisical.

Récupérer le docker network bridge de la stack :

Il commencera par le nom du dossier contenant la stack, puis le nom du network donné le compose file
```bash
docker network ls
```

Démarer la DB avec :
```bash
docker compose up hoppscotch-db -d
```

Effectuer la migration sur la base de donnée :
```bash
sudo docker run -it --rm --env-file .env --network <DOCKER_NETWORK> hoppscotch/hoppscotch /bin/sh -c "pnpx prisma migrate deploy"
```
