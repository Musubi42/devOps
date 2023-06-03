---
title: Eleventy skeleton
upload_file: ff
---
# Prerequisite

Install the following :
* [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/), It's vesion manager for Node, allowing to easily switch between Node version 
* [PNPM](https://pnpm.io/fr/installation), A tool that reuse already installed packages, instead of downloading the same package over and over.
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), A version control tool, that allow you to work seamlessly with teammate, and create [CI/CD](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## Init the project

*Init a new Node.js project*
```shell
pnpm init
```

### Installation

*Install the dependencies that are necessary to create a static website with Eleventy*
*Install all 
```shell
pnpm i --save-dev @11ty/eleventy tailwindcss postcss autoprefixer cssnano
```

*Explanation*
* *[@11ty/eleventy](https://www.npmjs.com/package/@11ty/eleventy)* : `eleventy` is the name of the package, `@11ty` is the scope. This convention allows grouping package under the same namespace.
* *[tailwindcss](https://www.npmjs.com/package/tailwindcss)* : A component-driven CSS framework for rapidly building custom user interfaces.
* *[postcss](https://www.npmjs.com/package/postcss)* : lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.  
* *[autoprefixer](https://www.npmjs.com/package/autoprefixer)* : A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.

### Package.json configuration

Add the following script to your `package.json` file 

```json
"scripts": {
    "build": "NODE_ENV=production npx eleventy",
    "start": "netlify dev",
    "dev": "NODE_ENV=development npx eleventy --serve",
    "watch": "npx eleventy --watch",
    "debug": "DEBUG=* npx eleventy"
  },
```

*Explanation*

&#x1F534; **You can get more information about the command by taping `<command> --help`. Or with you can download [tldr](https://tldr.sh/) a neat command that give you wick explanation on a command 

* *NODE_ENV* : Is a environment variable, that we can get with some JS.
If I've set `NODE_ENV=42` in my command, `process.env.CONTEXT` will be equal to `42`
* *npx* : It allows executing a locally installed package.
* *eleventy* : Will compile the template code to raw HTML, `--serve` will watch for any changes and recompile automatically.
* *netlify* : Will run a local dev server, perfect to test function
* *DEBUG* : Is a environment variable, It will output a plenty of logs to your terminal, so you can debug your app easily

Don't hesitate to ask [Chat.GPT](https://chat.openai.com) to get more information about some command.


### Tailwind configuration


## Start developing

### 
