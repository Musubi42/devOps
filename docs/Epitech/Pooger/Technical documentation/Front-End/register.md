---
sidebar_position: 2
title: Register
---

# Register.vue

### **Template**

- Le template contient une structure **`flex`** divisée en deux parties (**`w-1/2`** chacune).
- La première moitié (**`w-1/2`**) contient une image représentée par la balise **`<img>`** avec une classe CSS (**`object-contain`**) pour assurer le redimensionnement de l'image.
- La deuxième moitié contient un formulaire d'inscription :
    - Un titre indiquant "Créer un compte".
    - Un formulaire avec deux champs : "Pseudonyme" et "Adresse e-mail".
    - Un bouton "S'inscrire" pour soumettre le formulaire.
    - Un lien pour rediriger vers la page de connexion en cas de besoin.

### **Script Setup**

- Utilisation de la Composition API de Vue.js (**`<script setup>`**) pour la logique du composant.
- Importation des dépendances nécessaires comme **`ref`**, **`axios`**, et **`useRouter`** de Vue Router.
- Utilisation de **`ref`** pour créer des références réactives pour les champs **`login`** et **`email`**.
- Définition de fonctions :
    - **`goToLogin`**: Redirige l'utilisateur vers la page de connexion (**`/login`**) en utilisant **`router.push`**.
    - **`createUser`**: Appel à une requête POST vers l'API pour créer un nouvel utilisateur en utilisant les données fournies dans le formulaire.
        - Si la requête est réussie (status 201), l'utilisateur est redirigé vers le tableau de bord (**`/`**).
        - Les erreurs sont capturées et affichées dans la console en cas d'échec de la requête.