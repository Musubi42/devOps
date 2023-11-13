---
sidebar_position: 1
title: Back-End documentation
---

# Back-End

### **Routeur (`web/router.ex`)**

- Utilisation du module **`ApiWeb`** pour le routeur.
- Définition du pipeline **`api`** pour gérer les requêtes au format JSON.
- Utilisation de **`scope`** pour regrouper les routes sous le préfixe **`/api`**.
- Définition de routes pour les différentes actions de chaque contrôleur :
    - **`UserController`**: Gère les opérations CRUD (**`create`**, **`show`**, **`index`**, **`update`**, **`delete`**) sur les utilisateurs.
    - **`ClockController`**: Permet uniquement la création de pointages pour un utilisateur spécifique.
    - **`WorkingTimeController`**: Gère les actions **`index`**, **`show`**, **`create`**, **`update`**, **`delete`** pour les horaires de travail d'un utilisateur.
- Mise en place du LiveDashboard uniquement pour les environnements de développement et de test.

### **Contrôleurs**

1. **`UserController`**: Gère les actions sur les utilisateurs (création, affichage, modification, suppression).
2. **`ClockController`**: Traite les requêtes de création de pointages pour un utilisateur spécifique.
3. **`WorkingTimeController`**: Contrôle les actions sur les horaires de travail d'un utilisateur.

Chaque contrôleur effectue les opérations correspondantes pour sa ressource, telles que la validation des données, les interactions avec la base de données, et les réponses aux requêtes.

## Focus sur les contrôleurs :

[UserController](Back-End%20482e446ec4f64628986c893d846ddc5f/UserController%20d6c5c899aae24121adc7f0d65d20948b.md)

[ClockController](Back-End%20482e446ec4f64628986c893d846ddc5f/ClockController%20acb431f5610c460e9b0ab687c3f3e6a5.md)

[WorkingTimeController](Back-End%20482e446ec4f64628986c893d846ddc5f/WorkingTimeController%2001233dd23a2b46bc9a148839ccf752ac.md)

## Focus sur le fichier Account :

[Account.ex](Back-End%20482e446ec4f64628986c893d846ddc5f/Account%20ex%20853733bbdb1d45cb8dc00a75da1076e2.md)