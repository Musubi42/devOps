---
sidebar_position: 4
title: Clock manager
---

# ClockController

### **`show/2`**

- **Description**: Récupère les horaires (clocks) d'un utilisateur spécifique à partir de son identifiant (**`userID`**).
- **Fonctionnement**:
    - Vérifie la validité du format UUID de l'identifiant de l'utilisateur.
    - Si l'UUID est valide, récupère les horaires de l'utilisateur à partir de **`Accounts.list_user_clocks/1`**.
    - Réponse avec la liste des horaires en format JSON si la requête est valide.
    - En cas d'UUID invalide, renvoie une erreur avec le statut 400.

### **`create/2`**

- **Description**: Crée un nouvel horaire (clock) pour un utilisateur spécifique identifié par son **`userID`**.
- **Fonctionnement**:
    - Récupère le dernier horaire enregistré pour l'utilisateur par **`Accounts.get_last_user_clock/1`**.
    - Définit le statut du nouvel horaire en fonction du statut du dernier horaire (si présent).
    - Crée un nouvel horaire avec les paramètres fournis en utilisant **`Accounts.create_user_clock/2`**.
    - En cas de succès de la création, renvoie les détails de l'horaire créé avec un statut **`:created`**.
    - Si la création échoue, renvoie une réponse d'erreur avec le statut **`:unprocessable_entity`**.