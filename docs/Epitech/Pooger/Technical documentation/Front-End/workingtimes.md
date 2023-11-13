---
sidebar_position: 8
title: Working Times
---

# Workingtimes.vue

### **Template**

- Utilisation de directives **`v-if`** et **`v-for`** pour gérer l'affichage des horaires de travail et la boucle à travers ces horaires.
- La liste des horaires de travail est affichée sous forme de composants (**`work-entry`**), montrant les dates de début et de fin de chaque horaire.
- Chaque entrée a un lien pour accéder aux paramètres (**`Settings`**) d'un horaire de travail spécifique.

### **Script Setup**

- Importe le composant **`ModifyWorkingTime`**.
- Utilisation de la Composition API pour la logique du composant.
- Utilisation de **`ref`** et **`reactive`** pour stocker des valeurs réactives.
- Définition des variables pour gérer l'ouverture du modal de modification, stocker les détails des horaires sélectionnés, et les dates formatées.
- Fonctions :
    - **`openModifyModal`**: Ouvre le modal de modification et charge les détails de l'horaire de travail sélectionné.
    - **`closeModifyModalOpen`**: Ferme le modal de modification.
    - **`formatDateTime`**: Fonction pour formater les dates.
    - **`getWorkingTimes`**: Récupère la liste des horaires de travail pour un utilisateur spécifique.
    - **`deleteWorkingTime`**: Supprime un horaire de travail spécifique.
    - **`modifyWorkingTime`**: Modifie un horaire de travail.