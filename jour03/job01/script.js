// Attendre que le document HTML soit complètement chargé avant d'exécuter le code
$(document).ready(function () {
    // Texte de la citation à afficher
    const citation = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
    // Sélectionner le bouton avec l'id "button" et ajouter un événement au clic
    $('#button').click(function () {
        // Insérer le texte de la citation dans la div avec l'id "citation"
        $('#citation').text(citation);
        // Afficher la div citation avec un effet de glissement vers le bas
        $('#citation').slideDown();
    });
    // Sélectionner le bouton avec l'id "hideButton" et ajouter un événement au clic
    $('#hideButton').click(function () {
        // Cacher la div citation avec un effet de glissement vers le haut
        $('#citation').slideUp();
    });
});