---
sidebar_position: 3
title: Header
---

# Header.vue

### **Template**

- Le template contient une barre de navigation **`<nav>`** avec un style de fond rose (**`bg-pink-500`**) et une marge inférieure (**`mb-3`**).
- Il comprend une structure **`flex`** qui organise les éléments de navigation horizontalement.

### Éléments de Navigation

- **Dashboard:** Un lien vers la page Dashboard.
- **Settings:** Un lien vers la page de paramètres.
- **Feuille de temps (`WorkingTimes`):** Un lien vers la page affichant la liste des temps de travail pour un utilisateur spécifique.
- **ClockManager:** Un lien vers la gestion du temps (**`ClockManager`**) pour un utilisateur spécifique.
- **Créer un workingtime:** Un lien pour créer un nouvel enregistrement de temps de travail pour un utilisateur.
- **Déconnexion:** Un bouton qui, lorsqu'il est cliqué, déclenche la fonction **`logoutUser`**.

### **Script Setup**

- Utilisation de la Composition API de Vue.js (**`<script setup>`**) pour la logique du composant.
- Importation de la fonction **`logout`** depuis le fichier **`utils.js`** pour gérer la déconnexion de l'utilisateur.
- Utilisation des utilitaires **`useRoute`** et **`useRouter`** de Vue Router pour accéder aux informations de la route actuelle et manipuler la navigation.
- La variable **`userid`** récupère l'ID de l'utilisateur depuis le stockage local (**`localStorage`**).
- La fonction **`logoutUser`** est déclenchée lors du clic sur le bouton "Déconnexion". Elle appelle la fonction **`logout`** pour déconnecter l'utilisateur et redirige vers la page de connexion ("/login").