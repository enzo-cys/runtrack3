// On récupère le bouton
const button = document.getElementById("button");

// On vérifie que le bouton existe
if (button) {
    // Fonction showhide qui affiche/masque l'article
    const showhide = () => {
        // On cherche si l'article existe déjà dans la page
        const article = document.getElementById("article");
        
        // Si l'article existe
        if (article) {
            // remove() supprime l'élément du DOM
            article.remove();
        } else {
            // Si l'article n'existe pas, on le crée
            
            // createElement crée un nouvel élément HTML
            const newArticle = document.createElement("article");
            
            // On lui donne un id
            newArticle.id = "article";
            
            // textContent définit le contenu texte
            newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
            
            // appendChild ajoute l'élément à la fin du body
            document.body.appendChild(newArticle);
        }
    };

    // addEventListener écoute l'événement "click"
    // Quand on clique sur le bouton, la fonction showhide() s'exécute
    button.addEventListener("click", showhide);
}