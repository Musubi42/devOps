---
sidebar_position: 1
title: Login
---

# Login.vue

### **Template**

- Le template contient une structure **`flex`** divisée en deux parties (**`w-1/2`** chacune).
- La première moitié (**`w-1/2`**) contient une image représentée par la balise **`<img>`** avec une classe CSS (**`object-contain`**) pour assurer le redimensionnement de l'image.
- La deuxième moitié contient un formulaire de connexion :
    - Un titre indiquant "Se connecter".
    - Un formulaire avec deux champs : "Nom d'utilisateur" et "Email".
    - Un bouton "Se connecter" pour soumettre le formulaire.
    - Un lien pour rediriger vers la page d'inscription en cas de besoin.

### **Script Setup**

- Utilisation de la Composition API de Vue.js (**`<script setup>`**) pour la logique du composant.
- Importation des dépendances nécessaires comme Vue, les utilitaires **`ref`**, **`onBeforeMount`**, **`axios`**, **`useRoute`** et **`useRouter`** de Vue Router.
- Utilisation de **`ref`** pour créer des références réactives pour les champs **`username`** et **`email`**.
- Définition de fonctions :
    - **`goToRegister`**: Redirige l'utilisateur vers la page d'inscription (**`/register`**) en utilisant **`router.push`**.
    - **`getUser`**: Appel à une requête GET vers l'API pour récupérer les données de l'utilisateur à partir des champs de nom d'utilisateur et d'email fournis dans le formulaire.
        - Si la requête est réussie (status 200), les données de l'utilisateur sont stockées localement (dans **`localStorage`**) et l'utilisateur est redirigé vers le tableau de bord (**`/`**).
        - Les erreurs sont capturées et affichées dans la console en cas d'échec de la requête.