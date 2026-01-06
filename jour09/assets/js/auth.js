// Gestion de l'authentification
(function() {
    'use strict';

    // Validation email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function isLaPlateformeEmail(email) {
        return email.endsWith('@laplateforme.io');
    }

    // Inscription
    window.handleRegister = function(event) {
        event.preventDefault();

        const prenom = document.getElementById('registerPrenom').value.trim();
        const nom = document.getElementById('registerNom').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

        // Validation
        if (!prenom || !nom || !email || !password) {
            alert('Tous les champs sont obligatoires');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Format d\'email invalide');
            return;
        }

        if (!isLaPlateformeEmail(email)) {
            alert('Seuls les emails @laplateforme.io sont acceptés');
            return;
        }

        if (password !== passwordConfirm) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        if (password.length < 6) {
            alert('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }

        // Vérifier si l'email existe déjà
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) {
            alert('Cet email est déjà enregistré');
            return;
        }

        // Créer le nouvel utilisateur
        const newUser = {
            id: Date.now(),
            email,
            password,
            prenom,
            nom,
            role: 'user'
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        window.location.href = 'login.html';
    };

    // Connexion
    window.handleLogin = function(event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            alert('Tous les champs sont obligatoires');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Stocker l'utilisateur dans sessionStorage (sans le mot de passe)
            const { password: _, ...userWithoutPassword } = user;
            sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));

            // Redirection selon le rôle
            if (user.role === 'admin' || user.role === 'moderator') {
                window.location.href = 'backoffice.html';
            } else {
                window.location.href = 'calendar.html';
            }
        } else {
            alert('Email ou mot de passe incorrect');
        }
    };

    // Vérification de la connexion pour les pages protégées
    window.getCurrentUser = function() {
        const userStr = sessionStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    };

    window.isAdmin = function(user) {
        return user && user.role === 'admin';
    };

    window.isModerator = function(user) {
        return user && (user.role === 'moderator' || user.role === 'admin');
    };
})();
