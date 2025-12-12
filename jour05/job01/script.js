console.log("Script chargé !");
const isInscriptionPage = document.getElementById('inscriptionForm') !== null;
const isConnexionPage = document.getElementById('connexionForm') !== null;
console.log("Page inscription ?", isInscriptionPage);
console.log("Page connexion ?", isConnexionPage);

// Validation du prénom (asynchrone avec setTimeout)
async function validatePrenom(value) {
    console.log("Validation du prénom:", value);
    
    // On simule une validation asynchrone
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification du prénom en cours...");
            
            // Le prénom doit avoir au moins 2 caractères
            if (value.trim() === "") {
                console.log("Prénom vide");
                resolve({ valid: false, message: "Le prénom est requis" });
            } else if (value.trim().length < 2) {
                console.log("Prénom trop court");
                resolve({ valid: false, message: "La taille de votre prénom est trop petite" });
            } else {
                console.log("Prénom valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

// Validation du nom (asynchrone avec setTimeout)
async function validateNom(value) {
    console.log("Validation du nom:", value);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification du nom en cours...");
            
            // Le nom doit avoir au moins 2 caractères
            if (value.trim() === "") {
                console.log("Nom vide");
                resolve({ valid: false, message: "Le nom est requis" });
            } else if (value.trim().length < 2) {
                console.log("Nom trop court");
                resolve({ valid: false, message: "La taille de votre nom est trop petite" });
            } else {
                console.log("Nom valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

// Validation de l'email (asynchrone avec setTimeout)
async function validateEmail(value) {
    console.log("Validation de l'email:", value);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification de l'email en cours...");
            
            // Regex email
            const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
            
            if (value.trim() === "") {
                console.log("Email vide");
                resolve({ valid: false, message: "L'email est requis" });
            } else if (!emailRegex.test(value)) {
                console.log("Format email invalide");
                resolve({ valid: false, message: "Le format de l'email est invalide" });
            } else {
                console.log("Email valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

// Validation du mot de passe (asynchrone avec setTimeout)
async function validatePassword(value) {
    console.log("Validation du mot de passe:", value);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification du mot de passe en cours...");
            
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (value.trim() === "") {
                console.log("Mot de passe vide");
                resolve({ valid: false, message: "Le mot de passe est requis" });
            } else if (!passwordRegex.test(value)) {
                console.log("Format mot de passe incorrect");
                resolve({ 
                    valid: false, 
                    message: "8+ caractères, au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 spécial (@$!%*?&)" 
                });
            } else {
                console.log("Mot de passe valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

// Validation de la confirmation du mot de passe (asynchrone)
async function validatePasswordConfirm(value, passwordValue) {
    console.log("Validation de la confirmation:", value, "vs", passwordValue);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification de la confirmation du mot de passe...");
            
            if (value.trim() === "") {
                console.log("Confirmation vide");
                resolve({ valid: false, message: "La confirmation du mot de passe est requise" });
            } else if (value !== passwordValue) {
                console.log("Les mots de passe ne correspondent pas");
                resolve({ valid: false, message: "Les mots de passe ne correspondent pas" });
            } else {
                console.log("Confirmation valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

// Validation de l'adresse (asynchrone)
async function validateAdresse(value) {
    console.log("Validation de l'adresse:", value);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification de l'adresse en cours...");
            
            if (value.trim() === "") {
                console.log("Adresse vide");
                resolve({ valid: false, message: "L'adresse est requise" });
            } else if (value.trim().length < 5) {
                console.log("Adresse trop courte");
                resolve({ valid: false, message: "L'adresse est trop courte" });
            } else {
                console.log("Adresse valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

// Validation du code postal (asynchrone)
async function validateCodePostal(value) {
    console.log("Validation du code postal:", value);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Vérification du code postal en cours...");
            
            // Code postal français: 5 chiffres
            const codePostalRegex = /^[0-9]{5}$/;
            
            if (value.trim() === "") {
                console.log("Code postal vide");
                resolve({ valid: false, message: "Le code postal est requis" });
            } else if (!codePostalRegex.test(value)) {
                console.log("Code postal invalide");
                resolve({ valid: false, message: "Le code postal doit contenir 5 chiffres" });
            } else {
                console.log("Code postal valide");
                resolve({ valid: true, message: "" });
            }
        }, 0);
    });
}

function showError(fieldId, message) {
    console.log("Affichage erreur pour", fieldId, ":", message);
    const errorDiv = document.getElementById(`error-${fieldId}`);
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = message ? 'block' : 'none';
    }
}

if (isInscriptionPage) {
    console.log("Configuration de la page inscription");
    
    const form = document.getElementById('inscriptionForm');
    const prenomInput = document.getElementById('prenom');
    const nomInput = document.getElementById('nom');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('passwordConfirm');
    const adresseInput = document.getElementById('adresse');
    const codePostalInput = document.getElementById('codePostal');
    
    // Écoute les changements sur le prénom
    prenomInput.addEventListener('input', async function() {
        console.log("Changement détecté sur le prénom");
        const result = await validatePrenom(this.value);
        showError('prenom', result.message);
    });
    
    // Écoute les changements sur le nom
    nomInput.addEventListener('input', async function() {
        console.log("Changement détecté sur le nom");
        const result = await validateNom(this.value);
        showError('nom', result.message);
    });
    
    // Écoute les changements sur l'email
    emailInput.addEventListener('input', async function() {
        console.log("Changement détecté sur l'email");
        const result = await validateEmail(this.value);
        showError('email', result.message);
    });
    
    // Écoute les changements sur le mot de passe
    passwordInput.addEventListener('input', async function() {
        console.log("Changement détecté sur le mot de passe");
        const result = await validatePassword(this.value);
        showError('password', result.message);
        
        // Si la confirmation est déjà remplie, on la revalide
        if (passwordConfirmInput.value) {
            console.log("Revalidation de la confirmation");
            const confirmResult = await validatePasswordConfirm(passwordConfirmInput.value, this.value);
            showError('passwordConfirm', confirmResult.message);
        }
    });
    
    // Écoute les changements sur la confirmation du mot de passe
    passwordConfirmInput.addEventListener('input', async function() {
        console.log("Changement détecté sur la confirmation");
        const result = await validatePasswordConfirm(this.value, passwordInput.value);
        showError('passwordConfirm', result.message);
    });
    
    // Écoute les changements sur l'adresse
    adresseInput.addEventListener('input', async function() {
        console.log("Changement détecté sur l'adresse");
        const result = await validateAdresse(this.value);
        showError('adresse', result.message);
    });
    
    // Écoute les changements sur le code postal
    codePostalInput.addEventListener('input', async function() {
        console.log("Changement détecté sur le code postal");
        const result = await validateCodePostal(this.value);
        showError('codePostal', result.message);
    });
    
    // Soumission du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log("=== SOUMISSION DU FORMULAIRE D'INSCRIPTION ===");
        
        // Valide tous les champs
        const prenomResult = await validatePrenom(prenomInput.value);
        const nomResult = await validateNom(nomInput.value);
        const emailResult = await validateEmail(emailInput.value);
        const passwordResult = await validatePassword(passwordInput.value);
        const passwordConfirmResult = await validatePasswordConfirm(passwordConfirmInput.value, passwordInput.value);
        const adresseResult = await validateAdresse(adresseInput.value);
        const codePostalResult = await validateCodePostal(codePostalInput.value);
        
        // Affiche toutes les erreurs
        showError('prenom', prenomResult.message);
        showError('nom', nomResult.message);
        showError('email', emailResult.message);
        showError('password', passwordResult.message);
        showError('passwordConfirm', passwordConfirmResult.message);
        showError('adresse', adresseResult.message);
        showError('codePostal', codePostalResult.message);
        
        // Vérifie si tout est valide
        const allValid = prenomResult.valid && nomResult.valid && emailResult.valid && 
                        passwordResult.valid && passwordConfirmResult.valid && 
                        adresseResult.valid && codePostalResult.valid;
        
        console.log("Formulaire valide ?", allValid);
        
        if (allValid) {
            console.log("FORMULAIRE VALIDE - Inscription réussie !");
            alert("Inscription réussie ! Tous les champs sont valides.");
            // Ici on pourrait envoyer les données à un serveur
        } else {
            console.log("FORMULAIRE INVALIDE - Veuillez corriger les erreurs");
        }
    });
}


if (isConnexionPage) {
    console.log("Configuration de la page connexion");
    
    const form = document.getElementById('connexionForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Écoute les changements sur l'email
    emailInput.addEventListener('input', async function() {
        console.log("Changement détecté sur l'email");
        const result = await validateEmail(this.value);
        showError('email', result.message);
    });
    
    // Écoute les changements sur le mot de passe
    passwordInput.addEventListener('input', async function() {
        console.log("Changement détecté sur le mot de passe");
        const result = await validatePassword(this.value);
        showError('password', result.message);
    });
    
    // Soumission du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log("=== SOUMISSION DU FORMULAIRE DE CONNEXION ===");
        
        // Valide les champs
        const emailResult = await validateEmail(emailInput.value);
        const passwordResult = await validatePassword(passwordInput.value);
        
        // Affiche les erreurs
        showError('email', emailResult.message);
        showError('password', passwordResult.message);
        
        // Vérifie si tout est valide
        const allValid = emailResult.valid && passwordResult.valid;
        
        console.log("Formulaire valide ?", allValid);
        
        if (allValid) {
            console.log("FORMULAIRE VALIDE - Connexion réussie !");
            alert("Connexion réussie ! Les identifiants sont valides.");
            // Ici on pourrait envoyer les données à un serveur pour vérifier
        } else {
            console.log("FORMULAIRE INVALIDE - Veuillez corriger les erreurs");
        }
    });
}
console.log("Script initialisé avec succès !");