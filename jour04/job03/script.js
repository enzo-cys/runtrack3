document.addEventListener('DOMContentLoaded', function() {
    
    const boutonFiltrer = document.getElementById('filtrer');
    boutonFiltrer.addEventListener('click', function() {
        
        // Récupérer les valeurs saisies dans les champs du formulaire
        const idRecherche = document.getElementById('id').value;
        const nomRecherche = document.getElementById('nom').value.toLowerCase();
        const typeRecherche = document.getElementById('type').value;
        
        // Utiliser fetch pour récupérer le fichier pokemon.json
        fetch('pokemon.json')
            // Premier .then() : convertir la réponse en objet JSON
            .then(response => response.json())
            // Deuxième .then() : traiter les données JSON récupérées
            .then(pokemons => {
                
                // Filtrer les pokémons selon les critères saisis
                const pokemonsFiltres = pokemons.filter(pokemon => {
                    // Vérifier si l'ID correspond (si un ID est saisi)
                    const idCorrespond = !idRecherche || pokemon.id == idRecherche;
                    // Vérifier si le nom correspond (si un nom est saisi)
                    // On recherche dans le nom français en minuscules
                    const nomCorrespond = !nomRecherche || pokemon.name.french.toLowerCase().includes(nomRecherche);
                    // Vérifier si le type correspond (si un type est sélectionné)
                    // pokemon.type est un tableau, on vérifie si le type recherché est inclus
                    const typeCorrespond = !typeRecherche || pokemon.type.includes(typeRecherche);
                    // Retourner true si tous les critères correspondent
                    return idCorrespond && nomCorrespond && typeCorrespond;
                });
                afficherResultats(pokemonsFiltres);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des pokémons:', error);
            });
    });
});

// Fonction pour afficher les pokémons filtrés sur la page
function afficherResultats(pokemons) {
    
    // Récupérer la zone d'affichage des résultats
    const resultsDiv = document.getElementById('results');
    
    // Vider le contenu précédent
    resultsDiv.innerHTML = '';
    
    // Si aucun pokémon n'est trouvé
    if (pokemons.length === 0) {
        resultsDiv.innerHTML = '<p>Aucun Pokémon trouvé.</p>';
        return;
    }
    
    // Créer une liste pour afficher les pokémons
    const liste = document.createElement('ul');
    
    // Parcourir chaque pokémon filtré
    pokemons.forEach(pokemon => {
        
        // Créer un élément de liste pour ce pokémon
        const item = document.createElement('li');
        
        // Joindre les types par une virgule (car c'est un tableau)
        const types = pokemon.type.join(', ');
        
        // Définir le contenu HTML de l'élément
        item.innerHTML = `<strong>ID:</strong> ${pokemon.id} - <strong>Nom:</strong> ${pokemon.name.french} - <strong>Type:</strong> ${types}`;
        
        // Ajouter l'élément à la liste
        liste.appendChild(item);
    });
    
    // Ajouter la liste complète à la zone de résultats
    resultsDiv.appendChild(liste);
}
