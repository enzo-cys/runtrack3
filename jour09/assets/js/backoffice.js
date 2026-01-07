// Gestion du backoffice
(function() {
    'use strict';

    // VÉRIFICATION D'ACCÈS - Bloquer l'accès aux utilisateurs non modo/admin
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        alert('Vous devez être connecté pour accéder au backoffice');
        window.location.href = 'login.html';
        return;
    }
    
    if (!isModerator(currentUser)) {
        alert('Accès refusé. Cette page est réservée aux administrateurs et modérateurs.');
        window.location.href = 'index.html';
        return;
    }

    // Charger toutes les demandes pour les modo/admin
    window.loadAllRequests = function() {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            alert('Vous devez être connecté');
            window.location.href = 'login.html';
            return;
        }
        
        if (!isModerator(currentUser)) {
            alert('Accès non autorisé. Réservé aux modérateurs et administrateurs.');
            window.location.href = 'index.html';
            return;
        }

        const requestsContainer = document.getElementById('allRequestsList');
        if (!requestsContainer) return;

        const requests = JSON.parse(localStorage.getItem('requests')) || [];
        const sortedRequests = requests.sort((a, b) => new Date(a.date) - new Date(b.date));

        if (sortedRequests.length === 0) {
            requestsContainer.innerHTML = '<p class="text-secondary">Aucune demande de présence</p>';
            return;
        }

        let html = '<div class="table-responsive"><table class="table align-middle">';
        html += '<thead><tr><th>Étudiant</th><th>Date</th><th>Statut</th><th class="text-end">Actions</th></tr></thead><tbody>';

        sortedRequests.forEach(request => {
            const statusClass = request.status === 'approved' ? 'success' : 
                              request.status === 'rejected' ? 'danger' : 'warning';
            const statusText = request.status === 'approved' ? 'Validée' : 
                             request.status === 'rejected' ? 'Refusée' : 'En attente';

            html += `
                <tr>
                    <td>
                        <div><strong>${request.userName}</strong></div>
                        <small class="text-secondary">${request.userEmail}</small>
                        ${request.note ? `<div><small class="text-muted">Note: ${request.note}</small></div>` : ''}
                    </td>
                    <td>${formatDate(request.date)}</td>
                    <td><span class="badge text-bg-${statusClass}">${statusText}</span></td>
                    <td class="text-end">
            `;

            if (request.status === 'pending') {
                html += `
                    <div class="btn-group btn-group-sm" role="group">
                        <button type="button" class="btn btn-outline-success" onclick="updateRequestStatus(${request.id}, 'approved')">Valider</button>
                        <button type="button" class="btn btn-outline-danger" onclick="updateRequestStatus(${request.id}, 'rejected')">Refuser</button>
                    </div>
                `;
            } else {
                html += '<button type="button" class="btn btn-outline-secondary btn-sm" disabled>Traitée</button>';
            }

            html += '</td></tr>';
        });

        html += '</tbody></table></div>';
        requestsContainer.innerHTML = html;
    };

    // Mettre à jour le statut d'une demande
    window.updateRequestStatus = function(requestId, status) {
        const requests = JSON.parse(localStorage.getItem('requests')) || [];
        const request = requests.find(r => r.id === requestId);

        if (request) {
            request.status = status;
            request.updatedAt = new Date().toISOString();
            localStorage.setItem('requests', JSON.stringify(requests));
            
            const statusText = status === 'approved' ? 'validée' : 'refusée';
            alert(`Demande ${statusText} avec succès`);
            loadAllRequests();
        }
    };

    // Charger les statistiques des rôles (réservé aux admins)
    window.loadRoleStats = function() {
        const currentUser = getCurrentUser();
        if (!currentUser || !isAdmin(currentUser)) {
            return; // Les modérateurs n'ont pas accès aux statistiques
        }
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        const stats = {
            admin: users.filter(u => u.role === 'admin').length,
            moderator: users.filter(u => u.role === 'moderator').length,
            user: users.filter(u => u.role === 'user').length
        };

        document.getElementById('adminCount').textContent = stats.admin;
        document.getElementById('moderatorCount').textContent = stats.moderator;
        document.getElementById('userCount').textContent = stats.user;
    };

    // Charger la liste des utilisateurs pour l'admin
    window.loadUserManagement = function() {
        const currentUser = getCurrentUser();
        if (!currentUser || !isAdmin(currentUser)) {
            return;
        }

        const usersContainer = document.getElementById('userManagementList');
        if (!usersContainer) return;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        let html = '<div class="table-responsive"><table class="table align-middle">';
        html += '<thead><tr><th>Utilisateur</th><th>Email</th><th>Rôle</th><th class="text-end">Actions</th></tr></thead><tbody>';

        users.forEach(user => {
            const roleClass = user.role === 'admin' ? 'danger' : 
                            user.role === 'moderator' ? 'warning' : 'secondary';
            const roleText = user.role === 'admin' ? 'Administrateur' : 
                           user.role === 'moderator' ? 'Modérateur' : 'Utilisateur';

            html += `
                <tr>
                    <td><strong>${user.prenom} ${user.nom}</strong></td>
                    <td><small class="text-secondary">${user.email}</small></td>
                    <td><span class="badge text-bg-${roleClass}">${roleText}</span></td>
                    <td class="text-end">
            `;

            if (user.id !== currentUser.id) {
                html += '<div class="btn-group btn-group-sm" role="group">';
                if (user.role !== 'admin') {
                    html += `<button class="btn btn-outline-danger" onclick="changeUserRole(${user.id}, 'admin')" title="Promouvoir en Admin">→ Admin</button>`;
                }
                if (user.role !== 'moderator') {
                    html += `<button class="btn btn-outline-warning" onclick="changeUserRole(${user.id}, 'moderator')" title="Promouvoir en Modérateur">→ Modo</button>`;
                }
                if (user.role !== 'user') {
                    html += `<button class="btn btn-outline-secondary" onclick="changeUserRole(${user.id}, 'user')" title="Rétrograder en Utilisateur">→ User</button>`;
                }
                html += '</div>';
            } else {
                html += '<span class="text-muted small"><i>C\'est vous</i></span>';
            }

            html += '</td></tr>';
        });

        html += '</tbody></table></div>';
        usersContainer.innerHTML = html;
    };

    // Changer le rôle d'un utilisateur
    window.changeUserRole = function(userId, newRole) {
        const roleNames = {
            'admin': 'Administrateur',
            'moderator': 'Modérateur',
            'user': 'Utilisateur'
        };
        
        if (!confirm(`Confirmer le changement de rôle vers "${roleNames[newRole]}" ?`)) {
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.id === userId);

        if (user) {
            const oldRole = user.role;
            user.role = newRole;
            localStorage.setItem('users', JSON.stringify(users));
            
            alert(`✓ Rôle changé : ${roleNames[oldRole]} → ${roleNames[newRole]}`);
            loadUserManagement();
            loadRoleStats();
        }
    };

    // Formater une date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR');
    }

    // Initialisation
    document.addEventListener('DOMContentLoaded', function() {
        const currentUser = getCurrentUser();
        const isUserAdmin = isAdmin(currentUser);
        
        // Afficher ou masquer les sections selon le rôle
        const statsCard = document.querySelector('.card:has(#adminCount)');
        const adminPanel = document.getElementById('adminPanel');
        
        // Les modérateurs ne voient pas les statistiques
        if (statsCard && !isUserAdmin) {
            statsCard.style.display = 'none';
        }
        
        // Les modérateurs ne voient pas la gestion des rôles
        if (adminPanel && !isUserAdmin) {
            adminPanel.style.display = 'none';
        } else if (adminPanel && isUserAdmin) {
            adminPanel.style.display = 'block';
        }
        
        // Charger les données
        if (isModerator(currentUser)) {
            loadAllRequests();
        }

        if (isUserAdmin) {
            loadRoleStats();
            loadUserManagement();
        }
    });
})();
