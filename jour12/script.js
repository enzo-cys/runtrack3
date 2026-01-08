// Ajoute un 0 devant les nombres < 10 (ex: 5 -> 05)
const format = n => n < 10 ? "0" + n : n;

// Convertit des secondes en format MM:SS
const toMS = s => format(Math.floor(s / 60)) + ":" + format(s % 60);

// Convertit des secondes en format HH:MM:SS
const toHMS = s => format(Math.floor(s / 3600)) + ":" + format(Math.floor(s % 3600 / 60)) + ":" + format(s % 60);

// NAVIGATION
function initNavigation() {
    document.querySelectorAll(".btn-nav").forEach(btn => {
        btn.onclick = () => {
            // Désactiver tous les boutons et sections
            document.querySelectorAll(".btn-nav").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tool-section").forEach(s => s.classList.remove("active"));
            // Activer le bouton et la section cliqués
            btn.classList.add("active");
            document.getElementById(btn.dataset.tool).classList.add("active");
        };
    });
}

// MINUTEUR - Compte à rebours depuis un temps défini
let minuteur = { temps: 0, interval: null, actif: false };

// Met à jour l'affichage du minuteur
const afficherMinuteur = () => document.getElementById("affichageMinuteur").textContent = toMS(minuteur.temps);

// Active/désactive les contrôles du minuteur
const toggleControles = (desactiver) => {
    ["btnMinuteur1h", "btnMinuteur10min", "btnMinuteurMoins", "btnMinuteur10minP", "btnMinuteur1hP", "btnMinuteurPlus", "inputMinuteur"].forEach(id => 
        document.getElementById(id).disabled = desactiver
    );
};

// Démarre le minuteur
function demarrerMinuteur() {
    if (minuteur.actif) return;
    minuteur.actif = true;
    
    // Change les boutons et désactive les contrôles
    document.getElementById("btnMinuteurStart").classList.add("d-none");
    document.getElementById("btnMinuteurStop").classList.remove("d-none");
    toggleControles(true);
    
    // Décrémenter chaque seconde
    minuteur.interval = setInterval(() => {
        minuteur.temps--;
        afficherMinuteur();
        
        // Vérifier si terminé
        if (minuteur.temps <= 0) {
            arreterMinuteur();
            alert("Temps écoulé !");
            minuteur.temps = 0;
            afficherMinuteur();
        }
    }, 1000);
}

// Arrête le minuteur
function arreterMinuteur() {
    minuteur.actif = false;
    clearInterval(minuteur.interval);
    document.getElementById("btnMinuteurStart").classList.remove("d-none");
    document.getElementById("btnMinuteurStop").classList.add("d-none");
    toggleControles(false);
}

// Reset le minuteur à 0
function resetMinuteur() {
    arreterMinuteur();
    minuteur.temps = 0;
    afficherMinuteur();
    document.getElementById("inputMinuteur").value = "";
}

// Initialise les événements du minuteur
function initMinuteur() {
    afficherMinuteur();
    document.getElementById("btnMinuteurStart").onclick = demarrerMinuteur;
    document.getElementById("btnMinuteurStop").onclick = arreterMinuteur;
    document.getElementById("btnMinuteurReset").onclick = resetMinuteur;
    
    // Boutons -/+ (uniquement si non actif)
    document.getElementById("btnMinuteur1h").onclick = () => !minuteur.actif && minuteur.temps >= 3600 && (minuteur.temps -= 3600, afficherMinuteur());
    document.getElementById("btnMinuteur10min").onclick = () => !minuteur.actif && minuteur.temps >= 600 && (minuteur.temps -= 600, afficherMinuteur());
    document.getElementById("btnMinuteurMoins").onclick = () => !minuteur.actif && minuteur.temps >= 60 && (minuteur.temps -= 60, afficherMinuteur());
    document.getElementById("btnMinuteurPlus").onclick = () => !minuteur.actif && (minuteur.temps += 60, afficherMinuteur());
    document.getElementById("btnMinuteur10minP").onclick = () => !minuteur.actif && (minuteur.temps += 600, afficherMinuteur());
    document.getElementById("btnMinuteur1hP").onclick = () => !minuteur.actif && (minuteur.temps += 3600, afficherMinuteur());
    
    // Input personnalisé avec auto-formatage des ':'
    const inputMinuteur = document.getElementById("inputMinuteur");
    
    // Ajoute automatiquement les ':' pendant la saisie
    inputMinuteur.oninput = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, ''); // Garde uniquement les chiffres
        
        if (value.length >= 2) {
            // Ajoute ':' après les 2 premiers chiffres
            value = value.substring(0, 2) + ':' + value.substring(2, 4);
        }
        
        e.target.value = value;
    };
    
    // Validation au Enter
    inputMinuteur.onkeypress = (e) => {
        if (e.key === "Enter" && !minuteur.actif) {
            const match = e.target.value.match(/^(\d+):(\d{2})$/);
            if (match && match[2] < 60) {
                minuteur.temps = parseInt(match[1]) * 60 + parseInt(match[2]);
                afficherMinuteur();
                e.target.value = "";
            } else alert("Format invalide ! Utilisez MM:SS");
        }
    };
}


// CHRONOMÈTRE - Compte progressif avec tours
let chrono = { temps: 0, interval: null, actif: false, tours: [], num: 1 };

// Met à jour l'affichage du chronomètre
const afficherChrono = () => document.getElementById("affichageChrono").textContent = toHMS(chrono.temps);

// Démarre/arrête le chronomètre
function toggleChrono() {
    const btn = document.getElementById("btnChronoToggle");
    
    if (chrono.actif) {
        // Arrêter
        chrono.actif = false;
        clearInterval(chrono.interval);
        btn.textContent = "Reprendre";
        document.getElementById("btnChronoTour").disabled = true;
    } else {
        // Démarrer
        chrono.actif = true;
        btn.textContent = "Arrêter";
        document.getElementById("btnChronoTour").disabled = false;
        chrono.interval = setInterval(() => { chrono.temps++; afficherChrono(); }, 1000);
    }
}

// Enregistre un tour
function enregistrerTour() {
    if (!chrono.actif) return;
    chrono.tours.push({ num: chrono.num++, temps: chrono.temps });
    
    // Afficher les tours
    const liste = document.getElementById("listeTours");
    liste.innerHTML = chrono.tours.map(t => 
        `<div class="list-group-item d-flex justify-content-between">
            <span>Tour ${t.num}</span>
            <span class="badge">${toHMS(t.temps)}</span>
        </div>`
    ).join("");
}

// Reset le chronomètre
function resetChrono() {
    chrono = { temps: 0, interval: null, actif: false, tours: [], num: 1 };
    clearInterval(chrono.interval);
    afficherChrono();
    document.getElementById("listeTours").innerHTML = "";
    document.getElementById("btnChronoToggle").textContent = "Démarrer";
    document.getElementById("btnChronoTour").disabled = true;
}

// Initialise les événements du chronomètre
function initChronometre() {
    afficherChrono();
    document.getElementById("btnChronoToggle").onclick = toggleChrono;
    document.getElementById("btnChronoTour").onclick = enregistrerTour;
    document.getElementById("btnChronoReset").onclick = resetChrono;
}


// HORLOGE
function initHorloge() {
    const afficher = () => {
        const d = new Date();
        document.getElementById("affichageHorloge").textContent = 
            format(d.getHours()) + ":" + format(d.getMinutes()) + ":" + format(d.getSeconds());
    };
    afficher(); // Affichage immédiat
    setInterval(afficher, 1000); // Mise à jour chaque seconde
}

// RÉVEIL
let alarmes = [];
let alarmeId = 1;

// Ajoute une nouvelle alarme
function ajouterAlarme() {
    const heure = document.getElementById("inputReveilHeure").value;
    const message = document.getElementById("inputReveilMessage").value.trim();
    
    // Validation
    if (!heure || !message) return alert("Veuillez remplir tous les champs !");
    
    // Ajouter l'alarme
    alarmes.push({ id: alarmeId++, heure, message, declenchee: false });
    afficherAlarmes();
    
    // Vider les inputs
    document.getElementById("inputReveilHeure").value = "";
    document.getElementById("inputReveilMessage").value = "";
}

// Affiche la liste des alarmes
function afficherAlarmes() {
    const liste = document.getElementById("listeAlarmes");
    
    if (alarmes.length === 0) {
        liste.innerHTML = "";
        return;
    }
    
    liste.innerHTML = alarmes.map(a => {
        // Calculer le temps restant
        const maintenant = new Date();
        const [h, m] = a.heure.split(":");
        const alarmeDate = new Date();
        alarmeDate.setHours(h, m, 0, 0);
        
        // Si l'heure est passée aujourd'hui, calculer pour demain
        if (alarmeDate <= maintenant) alarmeDate.setDate(alarmeDate.getDate() + 1);
        
        const diff = alarmeDate - maintenant;
        const statut = a.declenchee ? "Déclenchée" : 
            `Dans ${Math.floor(diff / 3600000)}h ${Math.floor(diff % 3600000 / 60000)}min`;
        
        return `<div class="list-group-item d-flex justify-content-between">
            <div>
                <strong>${a.heure}</strong> - ${a.message}<br>
                <small class="badge">${statut}</small>
            </div>
            <button class="btn btn-sm btn-danger" onclick="supprimerAlarme(${a.id})">×</button>
        </div>`;
    }).join("");
}

// Vérifie si une alarme doit sonner
function verifierAlarmes() {
    const d = new Date();
    const heureActuelle = format(d.getHours()) + ":" + format(d.getMinutes());
    
    alarmes.forEach(a => {
        if (a.heure === heureActuelle && !a.declenchee) {
            alert("ALARME: " + a.message);
            a.declenchee = true;
            afficherAlarmes();
        }
    });
}

// Supprime une alarme
function supprimerAlarme(id) {
    alarmes = alarmes.filter(a => a.id !== id);
    afficherAlarmes();
}

// Initialise le réveil
function initReveil() {
    document.getElementById("btnReveilAjouter").onclick = ajouterAlarme;
    setInterval(() => { verifierAlarmes(); afficherAlarmes(); }, 1000);
}

// INITIALISATION AU CHARGEMENT
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMinuteur();
    initChronometre();
    initHorloge();
    initReveil();
});