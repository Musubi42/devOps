[![Netlify Status](https://api.netlify.com/api/v1/badges/ee87c487-49d6-4714-93a7-c79668a10265/deploy-status)](https://app.netlify.com/sites/musudocs/deploys)

# DevOps

On this branch I will create a unique Docusaurus containing all the docs for all the Epitech project

For each project I need doc

Every project as a repo on Epitech organization, 

From my private repo, EpitechDocs create a folder for every new project documentation,

The doc folder of Docusaurus must be bind to a volume,

Two options when I push I can trigger changes with webhook and Portainer or,
trigger a GitHub runner, that implies 1.9Gb of runner on my server, and heavy downloading


Create a Docusaurus image with an empty doc folder
Deploy it with portainer as a stack

And for each project create a folder in doc,
When a push occured on the main, trigger a script that use degit to update the doc
