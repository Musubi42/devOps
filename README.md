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