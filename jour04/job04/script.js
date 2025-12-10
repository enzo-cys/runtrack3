document.addEventListener('DOMContentLoaded', function() {
    
    const boutonUpdate = document.getElementById('update');
    boutonUpdate.addEventListener('click', function() {
        
        // Utiliser fetch pour récupérer les données depuis users.php
        // fetch() envoie une requête HTTP au serveur
        fetch('users.php')
            // Premier .then() : convertir la réponse en JSON
            // response.json() parse la réponse JSON et retourne un objet JavaScript
            .then(response => response.json())
            
            // Deuxième .then() : traiter les données récupérées
            .then(utilisateurs => {
                
                // Récupérer le corps du tableau (tbody)
                const tbody = document.querySelector('#usersTable tbody');
                
                // Vider le contenu actuel du tableau
                tbody.innerHTML = '';
                
                // Vérifier s'il y a une erreur dans la réponse
                if (utilisateurs.error) {
                    // Créer une ligne pour afficher l'erreur
                    const tr = document.createElement('tr');
                    const td = document.createElement('td');
                    // Fusionner toutes les colonnes pour afficher le message
                    td.colSpan = 4;
                    td.textContent = utilisateurs.error;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    return;
                }
                
                // Parcourir chaque utilisateur récupéré de la base de données
                utilisateurs.forEach(utilisateur => {
                    
                    // Créer une nouvelle ligne de tableau <tr>
                    const tr = document.createElement('tr');
                    
                    // Créer une cellule pour l'ID
                    const tdId = document.createElement('td');
                    tdId.textContent = utilisateur.id;
                    tr.appendChild(tdId);
                    
                    // Créer une cellule pour le nom
                    const tdNom = document.createElement('td');
                    tdNom.textContent = utilisateur.nom;
                    tr.appendChild(tdNom);
                    
                    // Créer une cellule pour le prénom
                    const tdPrenom = document.createElement('td');
                    tdPrenom.textContent = utilisateur.prenom;
                    tr.appendChild(tdPrenom);
                    
                    // Créer une cellule pour l'email
                    const tdEmail = document.createElement('td');
                    tdEmail.textContent = utilisateur.email;
                    tr.appendChild(tdEmail);
                    
                    // Ajouter la ligne complète au corps du tableau
                    tbody.appendChild(tr);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
            });
    });
});