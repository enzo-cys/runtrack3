// On récupère le footer
const footer = document.getElementById("footer");

if (footer) {
    // addEventListener écoute l'événement "scroll" (quand on fait défiler la page)
    window.addEventListener("scroll", () => {
        // scrollY = distance scrollée depuis le haut (en pixels)
        const scrollTop = window.scrollY;
        
        // scrollHeight = hauteur totale du document
        // clientHeight = hauteur visible de la fenêtre
        // La différence = distance qu'on peut scroller
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // On calcule le pourcentage (de 0 à 100)
        // Math.min assure qu'on ne dépasse pas 100
        const scrollPercent = Math.min((scrollTop / scrollHeight) * 100, 100);
        
        // On change la couleur du footer en fonction du pourcentage
        // hsl(hue, saturation, lightness)
        // hue va de 0 (rouge) à 120 (vert) selon le scroll
        footer.style.backgroundColor = `hsl(${scrollPercent * 1.2}, 70%, 50%)`;
    });
}