---
sidebar_position: 1
title: Clock Manager
---

# ClockManager.vue

### **Template**

Le template définit la structure visuelle du composant et contient deux sections principales :

1. **Section de début (`start`) :** Cette section est affichée lorsque l'utilisateur n'a pas encore commencé le pointage. Elle affiche l'heure de début de la dernière entrée de pointage (s'il y en a une) et un bouton pour commencer le pointage.
2. **Section de fin (`end`) :** Cette section est affichée lorsque l'utilisateur a déjà commencé le pointage. Elle affiche un bouton pour terminer le pointage.

### **Script Setup**

Le script setup contient la logique du composant, et voici ce qu'il fait :

- Importation des dépendances et initialisation de variables.
- Définition d'une fonction **`formatDateTime`** pour formater la date et l'heure.
- La fonction **`getClockData`** récupère les données d'horodatage pour l'utilisateur actuel en utilisant une requête GET et met à jour les variables **`clockData`**, **`clockIn`**, et **`lastClockData`**.
- La fonction **`clock`** est appelée lorsque l'utilisateur clique sur les boutons de début ou de fin de pointage. Elle effectue les actions suivantes :
    - Crée un objet **`clock`** avec l'heure actuelle.
    - Récupère l'ID de l'utilisateur depuis le stockage local (localStorage).
    - Effectue une requête POST pour enregistrer le pointage actuel (commencer ou terminer).
    - Si la requête POST est réussie, elle met à jour **`clockIn`**, et si le pointage est terminé, elle enregistre également un enregistrement de temps de travail correspondant.
- La fonction **`onBeforeMount`** est appelée avant que le composant ne soit monté, et elle récupère les données d'horodatage pour l'utilisateur actuel, s'il y en a.

### **Fonctionnement Général**

Lorsque l'utilisateur accède à la page **`ClockManager`**, le composant récupère les données d'horodatage à partir du backend en appelant la fonction **`getClockData`**. En fonction de ces données, il affiche la section de début si l'utilisateur n'a pas encore commencé le pointage ou la section de fin s'il a déjà commencé.

Lorsque l'utilisateur clique sur le bouton de début ou de fin, la fonction **`clock`** est appelée pour effectuer les opérations appropriées, y compris l'enregistrement du pointage et, si nécessaire, l'enregistrement d'un enregistrement de temps de travail.