---
sidebar_position: 1
title: Front-End documentation
---

# Front-End

### **Router Vue.js**

Le router est responsable de la navigation entre les différentes vues de l'application. Chaque route est associée à un chemin et à un composant spécifique.

### Routes Définies

1. **'/' (Dashboard) :** Redirige vers le composant Dashboard (peut-être une erreur dans le nom 'clockmanager').
2. **'/login' :** Redirige vers le composant de connexion (Login).
3. **'/register' :** Redirige vers le composant d'inscription (Register).
4. **'/settings' :** Redirige vers le composant des paramètres (Settings).
5. **'/workingtimes/:userid' :** Redirige vers le composant représentant la liste des temps de travail pour un utilisateur spécifique (WorkingTimes).
6. **'/workingtime/:userid/:workingtimeid' :** Redirige vers le composant de gestion d'un temps de travail spécifique (WorkingTime) pour un utilisateur donné.
7. **'/workingtime/:userid/' :** Redirige vers le composant de création d'un temps de travail pour un utilisateur spécifique (WorkingTime).
8. **'/clock/:userid' :** Redirige vers le composant de gestion du temps (ClockManager) pour un utilisateur spécifique.

### **Composants Vue**

Les composants définis sont utilisés pour représenter différentes parties de l'interface utilisateur de l'application. Chaque composant est associé à une fonctionnalité ou à une vue spécifique.

### Composants

1. **ClockManager.vue :** Gère les fonctionnalités liées à la gestion du temps.
2. **Header.vue :** Composant de l'en-tête, probablement utilisé pour la navigation et l'interface utilisateur.
3. **Login.vue :** Composant pour la page de connexion.
4. **Register.vue :** Composant pour la page d'inscription.
5. **Settings.vue :** Composant pour la page des paramètres de l'utilisateur.
6. **User.vue :** Composant représentant les détails d'un utilisateur (utilisation à vérifier, n'est pas mentionné dans le router fourni).
7. **Workingtime.vue :** Gère la création et la modification des temps de travail.
8. **Workingtimes.vue :** Liste les temps de travail pour un utilisateur donné.

## Focus sur chacun des composants

[ClockManager.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/ClockManager%20vue%20abe229ce726940d9989aa2bb69d2b996.md)

[Header.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/Header%20vue%2034069fb9717a441bb9425889ef6c2487.md)

[Login.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/Login%20vue%20e4672958ce18462bbe0efe3c0ca25cd2.md)

[Register.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/Register%20vue%20a2b7f8ad902f469488c2784a589aa650.md)

[Settings.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/Settings%20vue%2052dbfd2c68654b5c96f3f6c3ce4b86f6.md)

[User.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/User%20vue%2094c4d0ff78134c43b23f3bd1fafd061a.md)

[Workingtime.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/Workingtime%20vue%2076c6049292cb450bb99fb2b03dfe25f7.md)

[Workingtimes.vue](Front-End%2050e65316e699479e9e5d7d57f02a78c1/Workingtimes%20vue%20af32a452f8bf42e5af35f54226120610.md)