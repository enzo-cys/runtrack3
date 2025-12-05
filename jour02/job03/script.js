// On récupère les éléments du DOM (Document Object Model)
// getElementById permet de trouver un élément HTML par son id
const compteur = document.getElementById("compteur");
const button = document.getElementById("button");

// On vérifie que les éléments existent bien dans la page
if (compteur && button) {
    // Fonction qui ajoute 1 au compteur
    const addone = () => {
        // parseInt convertit le texte en nombre
        // textContent récupère le contenu texte de l'élément
        let valeur = parseInt(compteur.textContent);
        
        // On ajoute 1
        valeur++;
        
        // On met à jour le contenu affiché
        compteur.textContent = valeur;
    };

    // addEventListener écoute les événements (ici le clic)
    // Quand on clique sur le bouton, la fonction addone() s'exécute
    button.addEventListener("click", addone);
}