Pour démarer l'exemple faire 
```shell
docker compose up --build
```

Pour créer le middlware basicAuth, on peut générer des identifiants avec la commande

Générer un mot de passe hashé
```shell
openssl passwd -6 -salt <salt> <password>
```

Dans le fichier users.u
```shell
<username>:<hashedPassword>
```
