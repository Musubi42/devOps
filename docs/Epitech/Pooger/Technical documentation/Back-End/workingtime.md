---
sidebar_position: 3
title: Working Times
---

# WorkingTimeController

### **`index/2`**

- **Description**: Récupère les temps de travail (working times) d'un utilisateur donné identifié par **`userID`**, selon un intervalle de dates en option (**`start`** et **`end`**).
- **Fonctionnement**:
    - Détermine les temps de travail de l'utilisateur selon le paramètre **`start`** et **`end`** fourni :
        - Si **`start`** et **`end`** sont fournis, renvoie les temps de travail dans cet intervalle.
        - Sinon, renvoie tous les temps de travail de l'utilisateur.
    - Renvoie les temps de travail récupérés sous forme de réponse JSON.

### **`create/2`**

- **Description**: Crée un nouveau temps de travail pour un utilisateur spécifique identifié par **`userID`**.
- **Fonctionnement**:
    - Crée un nouveau temps de travail en utilisant **`Accounts.create_working_time/1`** en fusionnant les paramètres fournis avec l'ID de l'utilisateur.
    - Si la création réussit, renvoie les détails du temps de travail nouvellement créé avec le statut **`:created`**.

### **`show/2`**

- **Description**: Récupère les détails d'un temps de travail spécifique pour un utilisateur donné identifié par **`userID`** et **`id`**.
- **Fonctionnement**:
    - Récupère le temps de travail spécifique de l'utilisateur identifié par **`id`** en utilisant **`Accounts.get_working_time/2`**.
    - Renvoie les détails du temps de travail sous forme de réponse JSON.

### **`update/2`**

- **Description**: Met à jour un temps de travail spécifique identifié par son **`id`**.
- **Fonctionnement**:
    - Récupère le temps de travail à mettre à jour en utilisant **`Accounts.get_working_time!/1`**.
    - Tente de mettre à jour le temps de travail avec les paramètres fournis via **`Accounts.update_working_time/2`**.
    - Si la mise à jour est réussie, renvoie les détails du temps de travail mis à jour en format JSON.

### **`delete/2`**

- **Description**: Supprime un temps de travail spécifique identifié par son **`id`**.
- **Fonctionnement**:
    - Récupère le temps de travail à supprimer en utilisant **`Accounts.get_working_time!/1`**.
    - Tente de supprimer ce temps de travail via **`Accounts.delete_working_time/1`**.
    - En cas de suppression réussie, renvoie une réponse avec le statut **`:no_content`**.