---
sidebar_position: 6
title: User
---

# User.vue

### **Template**

- Le template contient un formulaire permettant à l'utilisateur de modifier ses informations.
    - Il présente deux champs de saisie : "Username" et "Adresse e-mail" pour afficher et modifier les données de l'utilisateur.
    - Deux boutons :
        - "Modifier" : permet de soumettre les modifications de compte.
        - "Supprimer mon compte" : déclenche la fonction **`deleteUser`** pour supprimer le compte de l'utilisateur.

### **Script Setup**

- Utilisation de la Composition API de Vue.js (**`<script setup>`**) pour la logique du composant.
- Importation des dépendances comme **`ref`**, **`axios`**, et **`useRouter`** de Vue Router.
- Utilisation de **`ref`** pour créer des références réactives pour les champs **`login`** et **`email`**, et initialisation de ces champs avec les données actuelles stockées localement.
- Définition de fonctions :
    - **`updateUser`** : Envoie une requête PATCH pour mettre à jour les données de l'utilisateur. Si la requête réussit (status 200), les données locales sont mises à jour, et l'utilisateur est redirigé vers la page principale (**`/`**).
    - **`deleteUser`** : Déclenche une requête DELETE pour supprimer le compte de l'utilisateur. En cas de succès (status 204), l'utilisateur est déconnecté et redirigé vers la page de connexion (**`/login`**).