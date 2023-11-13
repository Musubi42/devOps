---
sidebar_position: 5
title: User
---

# UserController

### **`index/2`**

- **Description**: Récupère des utilisateurs en fonction des paramètres de requête fournis (comme **`email`** ou **`username`**).
- **Fonctionnement**:
    - Utilise **`Accounts.list_users/1`** pour récupérer les utilisateurs correspondants.
    - Gestion des cas où aucun utilisateur n'est trouvé et renvoie une réponse 401 en cas d'absence d'utilisateurs.
    - Réponse JSON avec la liste des utilisateurs si au moins un utilisateur est trouvé.

### **`create/2`**

- **Description**: Crée un nouvel utilisateur.
- **Fonctionnement**:
    - Utilise **`Accounts.create_user/1`** pour créer un utilisateur à partir des paramètres fournis.
    - Si la création est un succès, renvoie les détails de l'utilisateur créé avec un statut **`:created`**.
    - En cas d'échec de la création, aucune réponse n'est renvoyée.

### **`show/2`**

- **Description**: Récupère les détails d'un utilisateur spécifique en utilisant son identifiant (**`id`**).
- **Fonctionnement**:
    - Renvoie les détails de l'utilisateur au format JSON.

### **`update/2`**

- **Description**: Met à jour les détails d'un utilisateur spécifique identifié par son **`id`**.
- **Fonctionnement**:
    - Utilise **`Accounts.update_user/2`** pour modifier les détails de l'utilisateur en fonction des paramètres fournis.
    - Renvoie les détails mis à jour de l'utilisateur si la mise à jour est un succès.

### **`delete/2`**

- **Description**: Supprime un utilisateur spécifique identifié par son **`id`**.
- **Fonctionnement**:
    - Utilise **`Accounts.delete_user/1`** pour supprimer l'utilisateur en fonction de son **`id`**.
    - En cas de suppression réussie, renvoie une réponse avec un statut **`:no_content`**.