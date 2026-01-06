// Script principal - Gestion globale et initialisation
(function() {
    'use strict';

    // Initialiser les données si nécessaire
    function initializeData() {
        if (!localStorage.getItem('users')) {
            const defaultUsers = [
                {
                    id: 1,
                    email: "admin@laplateforme.io",
                    prenom: "Admin",
                    nom: "Plateforme",
                    password: "admin123",
                    role: "admin"
                },
                {
                    id: 2,
                    email: "moderator@laplateforme.io",
                    prenom: "Modérateur",
                    nom: "Test",
                    password: "mod123",
                    role: "moderator"
                },
                {
                    id: 3,
                    email: "user@laplateforme.io",
                    prenom: "Utilisateur",
                    nom: "Test",
                    password: "user123",
                    role: "user"
                }
            ];
            localStorage.setItem('users', JSON.stringify(defaultUsers));
        }

        if (!localStorage.getItem('requests')) {
            localStorage.setItem('requests', JSON.stringify([]));
        }
    }

    // Vérifier si l'utilisateur est connecté
    function checkAuth() {
        const currentUser = sessionStorage.getItem('currentUser');
        const publicPages = ['index.html', 'login.html', 'register.html', ''];
        const currentPage = window.location.pathname.split('/').pop();

        if (!currentUser && !publicPages.includes(currentPage)) {
            window.location.href = 'login.html';
        }
    }

    // Fonction de déconnexion globale
    window.logout = function() {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    };

    // Initialiser au chargement
    initializeData();
    checkAuth();
})();
