// On récupère le textarea
const keylogger = document.getElementById("keylogger");

// On vérifie que le textarea existe
if (keylogger) {
    // addEventListener écoute l'événement "keypress" (quand on appuie sur une touche)
    // window = fenêtre du navigateur (pour capturer toutes les touches)
    window.addEventListener("keypress", (e) => {
        // e.key = la touche qui a été pressée
        const key = e.key;
        
        // Expression régulière pour vérifier si c'est une lettre a-z
        // /^[a-z]$/i signifie : commence par (^) une lettre a-z ($), i = insensible à la casse
        if (/^[a-z]$/i.test(key)) {
            // document.activeElement = l'élément qui a le focus (où on écrit)
            
            // Si le focus est dans le textarea
            if (document.activeElement === keylogger) {
                // La lettre s'ajoute naturellement (saisie normale)
                // + on ajoute la même lettre une deuxième fois
                keylogger.value += key;
            } else {
                // Si le focus est ailleurs, on ajoute juste la lettre une fois
                keylogger.value += key;
            }
        }
    });
}