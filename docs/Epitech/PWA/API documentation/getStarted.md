---
sidebar_position: 1
title: Get started
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

Let's break it down :
<details>
  <summary>Details about the dev command</summary>
  <div>
    <quote>The command uses concurrently to run multiple commands at the same time. concurrently is a utility that allows you to run multiple npm scripts in parallel,</quote>
    <ol>
            <li>
                <strong>Nodemon with Node Inspector:</strong>
                <ul>
                <li>nodemon --inspect=9229 -e ts,tsx --exec node -r ts-node/register ./src/server.ts</li>
                <li>nodemon is a utility that automatically restarts a node application when file changes in the directory are detected. It's particularly useful in development environments.</li>
                <li>--inspect=9229 enables the Node.js inspector, which is used to debug Node.js applications. It listens on port 9229.</li>
                <li>-e ts,tsx tells nodemon to watch for changes in files with .ts and .tsx extensions.</li>
                <li>--exec node -r ts-node/register ./src/server.ts specifies the command to run. It uses Node.js to execute the TypeScript file ./src/server.ts. The -r ts-node/register part ensures that ts-node is used for on-the-fly TypeScript compilation.</li>
                </ul>
            </li>
            <li>
                <strong>Nodemon with TSOA:</strong>
                <ul>
                <li>nodemon -x "tsoa spec-and-routes"</li>
                <li>This command also uses nodemon, but here it's used to run tsoa spec-and-routes whenever a file change is detected.</li>
                <li>tsoa spec-and-routes is likely a custom script or command related to tsoa, a framework for building TypeScript-based REST APIs. This command is typically used to automatically generate OpenAPI (Swagger) specification files and update routes.</li>
                </ul>
            </li>
            <li>
                <strong>TypeScript UML Generation:</strong>
                <ul>
                <li>tsuml2 --glob "./src/**/*.ts" -m -o "./src/spec/uml.svg"</li>
                <li>tsuml2 is a tool used for generating UML diagrams from TypeScript source files.</li>
                <li>--glob "./src/**/*.ts" specifies the pattern for TypeScript files to include in the UML diagram. It includes all .ts files in the src directory and its subdirectories.</li>
                <li>-m might be a flag for a specific mode in tsuml2, depending on its version and capabilities.</li>
                <li>-o "./src/spec/uml.svg" specifies the output file for the UML diagram, which in this case is an SVG file in the ./src/spec/ directory.</li>
                </ul>
            </li>
        </ol>
  </div>
</details>


# Testing for development

For testing purpose we use `bruno` an open source testing tool, the test are versionned with Github.

Go to `API/doc/Cash Manager` :
```bash
cd API/doc/Cash Manager
```

Intall the dependencies needed by `bruno` to run :
```bash
npm i 
```

[Install the `bruno` software](https://www.usebruno.com/downloads)

Setup the environment variables :
![Bruno - environment variable](/img/bruno-environment-variables.png "environment variables")

Use environment variable :
![Bruno - use environment variable](/img/bruno-use-env-var.png "use environment variables")





