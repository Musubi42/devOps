[ ![Netlify Status](https://api.netlify.com/api/v1/badges/ee87c487-49d6-4714-93a7-c79668a10265/deploy-status)](https://app.netlify.com/sites/musudocs/deploys)

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

## How to create a doc

En créant une nouvelle doc, par défaut le nom est index.html
Donc en mettant se fichier dans un dossier,
l'URL va être sans .html et prendre le nom du folder

Donc dans le path renseigner le nom du parent (si parent) et le nom qu'on veut donner à cette doc
Ca va créer dans Github un folder qui prend le nom qu'on a donné à la doc et dedans un index.html

Pour upload les files, la config d'Epitech n'a pas l'air trop mal
Peaufiner l'emplacement pour les uploads, c'est relatif à l'emplacement de la doc défini dans la conf
Pour rendre ce fichier accessible, je peux utiliser raw.githubusercontent.com
Donc si ça s'upload à cet emplacement https://github.com/Musubi42/devOps/blob/musudoc/docs/Epitech/uploads/static/epitech/uploads/planningmsc.pdf
Je dois convertir comme ça : https://raw.githubusercontent.com/Musubi42/devOps/musudoc/docs/Epitech/uploads/static/epitech/uploads/planningmsc.pdf

Donc je peux créer des liens en utilisant cette méthode

Ça c’est la racine de tout document uploadé : <https://raw.githubusercontent.com/Musubi42/devOps/musudoc/docs/>

 Je peux voir à faire un petit truc dans le futur où pendant le build le lien en créé en auto