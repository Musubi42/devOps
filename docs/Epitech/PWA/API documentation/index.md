---
sidebar_position: 1
title: API documentation
---
# References

[Github repo back](https://github.com/EpitechMscProPromo2025/T-DEV-700-LIL_1/tree/api)

# How to install

Clone the project.

```bash
git clone https://github.com/EpitechMscProPromo2025/T-DEV-700-LIL_1.git .
``` 

Go to the `API` folder.
```bash
cd API
``` 

Install the dependecies.
```bash
npm i
```

Run the project via Expo
```bash
npm run dev
``` 

This will trigger this command inside of the `package.json` : 

<code>
    "dev": "concurrently \"nodemon --inspect=9229 -e ts,tsx --exec node -r ts-node/register ./src/server.ts\" \"nodemon -x tsoa spec-and-routes\" \"tsuml2 --glob \"./src/**/*.ts\" -m -o \"./src/spec/uml.svg\"\" ",
</code>

Which does

* 

# Test locally



