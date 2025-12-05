// Le code Konami : ↑ ↑ ↓ ↓ ← → ← → B A
// On utilise les codes des touches du clavier
const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

// Tableau pour stocker les touches tapées par l'utilisateur
let userInput = [];

// addEventListener écoute l'événement "keydown" (quand on appuie sur une touche)
window.addEventListener('keydown', (e) => {
    // On ajoute la touche pressée à la fin du tableau
    userInput.push(e.key);
    
    // On garde seulement les 10 dernières touches (longueur du code Konami)
    // slice(-10) prend les 10 derniers éléments
    userInput = userInput.slice(-konamiCode.length);
    
    // On vérifie si les touches tapées correspondent au code Konami
    // join('') transforme le tableau en texte pour comparer
    if (userInput.join('') === konamiCode.join('')) {
        // Si le code est correct, on ajoute la classe "konami" au body
        // classList permet de manipuler les classes CSS d'un élément
        document.body.classList.add('konami');
    }
});