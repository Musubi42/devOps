---
sidebar_position: 2
title: Account
---

# Account.ex

Voici la structure du fichier **`api/accounts.ex`** :

### **Fonctions liées aux Utilisateurs (`UserController`)**

- **`list_users`** : Récupère la liste des utilisateurs en fonction de critères.
- **`get_user!`** : Récupère un utilisateur spécifique par ID.
- **`create_user`** : Crée un nouvel utilisateur.
- **`update_user`** : Met à jour un utilisateur existant.
- **`delete_user`** : Supprime un utilisateur existant.

### **Fonctions liées aux Horloges (`ClockController`)**

- **`list_user_clocks`** : Récupère les horloges associées à un utilisateur.
- **`get_last_user_clock`** : Récupère la dernière horloge pour un utilisateur.
- **`create_user_clock`** : Crée une nouvelle horloge pour un utilisateur.
- **`get_clock!`** : Récupère une horloge spécifique par ID.

### **Fonctions liées aux Temps de Travail (`WorkingTimeController`)**

- **`find_working_times_by_user_and_date_range`** : Récupère les temps de travail en fonction d'une plage de dates.
- **`get_working_time`** : Récupère un temps de travail spécifique par ID.
- **`find_all_working_times_by_user`** : Récupère tous les temps de travail pour un utilisateur.
- D'autres fonctions permettent de créer, mettre à jour et supprimer des temps de travail.