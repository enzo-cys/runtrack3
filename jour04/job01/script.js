document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        
        // Utiliser fetch pour récupérer le contenu du fichier expression.txt
        // fetch() retourne une Promise qui se résout avec la réponse HTTP
        fetch('expression.txt')
            // Premier .then() : traiter la réponse HTTP
            // response.text() extrait le contenu du fichier sous forme de texte
            .then(response => response.text())
            
            // Deuxième .then() : traiter le texte récupéré
            .then(data => {
                // Créer un nouvel élément paragraphe
                const paragraphe = document.createElement('p');
                // Insérer le contenu du fichier dans le paragraphe
                paragraphe.textContent = data;
                // Ajouter le paragraphe au corps de la page
                document.body.appendChild(paragraphe);
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier:', error);
            });
    });
});