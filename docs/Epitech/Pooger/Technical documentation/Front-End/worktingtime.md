---
sidebar_position: 7
title: Working Time
---

# Workingtime.vue

### **Template**

- Affiche les informations d'un horaire de travail s'il existe pour l'utilisateur.
- Sinon, affiche des options pour créer un nouvel horaire de travail.
- Permet de modifier et supprimer l'horaire de travail existant.
- Contient deux modals (**`ModifyModal`** et **`CreateModal`**) pour modifier ou créer de nouveaux horaires de travail.

### **Script Setup**

- Utilisation de la Composition API de Vue.js (**`<script setup>`**) pour la logique du composant.
- Importe les modals **`ModifyWorkingTime`** et **`CreateWorkingTime`**.
- Utilisation de **`ref`** pour créer des références réactives pour les états de modals, les données de travail, et les états de chargement.
- Utilisation de **`reactive`** pour créer un objet réactif pour stocker les détails de l'horaire de travail sélectionné.
- Fonctions :
    - **`openModifyModal`**: Ouvre le modal de modification et peuple les champs avec les détails de l'horaire de travail existant.
    - **`openCreateModal`**: Ouvre le modal de création.
    - **`closeCreateModal`**, **`closeModifyModalOpen`**: Ferme les modals.
    - **`formatDateTime`**: Formatte les dates et heures.
    - **`getWorkingTime`**: Récupère les détails de l'horaire de travail existant en fonction de l'ID de l'utilisateur et de l'horaire de travail.
    - **`deleteWorkingTime`**: Supprime l'horaire de travail sélectionné et redirige vers la liste des horaires de travail.
    - **`updateWorkingTime`**: Met à jour l'horaire de travail existant.
    - **`createWorkingTime`**: Crée un nouvel horaire de travail.