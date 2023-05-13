---
sidebar_position: 1
---

# React

## The architecure of our React is as follow
![Front archi](https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/Front_archi.png)

## To start the react project

The full command to start the project
```bash
react-scripts start
```

Or the alias script from package.json

```bash
npm run start
```

## To compile CSS

We use TailwindCSS to enhance our CSS powa !

The full command to compile the CSS
```bash
npx tailwindcss -i ./input.css -o ./src/index.css --watch
```

Or the alias script from package.json

```bash
npm run start
```

# SocketIO

We use SocketIO_client to exchange messages from the back and front in realtime

### Manage user

How we manage user :
![User management][https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/socketio_client_user.png]

### Join Channel

How we manage the channel 
![Channel management][https://github.com/Musubi42/EpitechDocs/blob/epidocs/static/sockeio_create_channel.png]

For all the reference this cheatsheet from socketIO
[SocketIO cheatsheet](https://socket.io/docs/v3/emit-cheatsheet/)

