---
sidebar_position: 2
---

# Backend

We use a classic Express architecture for our backend

How we construct the architecture of our BackEnc
![BackEnd architecure][https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/server_archi.png]

## .env

For the environment variables you have .env.example with all the keys, but for the value you have to ask on GitHub

How we manage the environment variable 
![][https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/env_example.png]


## databse schema

Every user store their private message on their document
![user model][https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/user_model.png]


All the message of a private channel is stored on his document 
Reference-style: 
![channel model][[https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/channel_model.png]


## Connect to the mongoDB cluster

Download compass
[Link to compass](https://www.mongodb.com/try/download/compass)

To get the URL of the cluster contact us on GitHub

## Auth

At the register before the register controller is triggered, we use a middleware *getRandomAvatar*, so we can add a avatar picture for the user.

![register route][https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/route_auth.png]


