// On récupère les éléments du DOM (Document Object Model)
// getElementById permet de trouver un élément HTML par son id
const element = document.getElementById("citation");
const button = document.getElementById("button");

// On vérifie que les éléments existent bien dans la page
if (element && button) {
    // Fonction citation qui affiche le texte dans la console
    const citation = () => {
        // console.log affiche un message dans la console du navigateur (F12)
        // textContent récupère le contenu texte de l'élément
        console.log(element.textContent);
    };

    // addEventListener écoute les événements sur un élément
    // "click" = quand on clique sur le bouton
    // citation = la fonction à exécuter quand on clique
    button.addEventListener("click", citation);
}