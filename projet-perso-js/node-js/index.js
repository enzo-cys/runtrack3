console.log("Bonjour Node.js !");

const version = process.version;
console.log("Version Node.js", version);


/*
Vscode : Créer un dossier (hello-node), Penser a sauvegarder les fichier a chaque modification

ouvrire console de commande Git Bash (meilleurs),

cd dans le bon dossier (hello-node exemple : cd /c/laragon/www/runtrack3/projet-perso-js/hello-node/),

on vérifie qui en nmp et node avec les commandes : nmp -v et node -v (normalement tu as les 2 grace a laragon),

npm init ou npm init -y (le -y permets de dire yes a tout) sa crée un package.json,

touch index.js qui créer un fichier index.js,

dans index.js :    console.log("Hello NodeJs !");    dans le terminal : node index.js (éxécute le fichier),

reourne dans package.json dans script écrire :    "start":"node index.js"   sa permet d'exécutéer la commande précédente mais en marquant seulement npm start dans le terminal,

ensuite npm install --save-dev nodemon , dans package.json ajoute quelque ligne,

npx nodemon index.js  permet d'exécuter la commande avec nodemon sauf que si tu change un truc dans index.j mets le résultat en temps réelle,

ajoute dans le package.json dans script:    "dev": "nodemon"   sa permet d'exécutéer la commande précédente mais en marquant seulement npm run dev dans le terminal,

dans index.js :              const version = process.versions; 

et aussi dans index.js :     console.log("Version", version);

dans le dossier hello-node on créer un fichier .gitignore avec dedans : /node_modules/

dans index.js ajoute :     console.log("Plateforme", process.platform);

*/