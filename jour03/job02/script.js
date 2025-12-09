// Attendre que le document soit complètement chargé
$(document).ready(function () {

    // Tableau contenant les chemins des 6 images de l'arc-en-ciel dans le bon ordre
    const images = [
        'images/arc1.png',
        'images/arc2.png',
        'images/arc3.png',
        'images/arc4.png',
        'images/arc5.png',
        'images/arc6.png'
    ];

    // Sélectionner les deux conteneurs
    const shuffledContainer = $('#shuffled-container');
    const rainbowContainer = $('#rainbow-container');

    // Fonction pour mélanger un tableau
    function shuffleArray(array) {
        // Créer une copie du tableau
        let shuffled = array.slice();
        // Mélanger les éléments aléatoirement
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Fonction pour initialiser les images mélangées
    function displayShuffledImages(imageArray) {
        // Vider le conteneur mélangé
        shuffledContainer.empty();
        // Vider le conteneur arc-en-ciel
        rainbowContainer.empty();

        // Parcourir chaque image et l'ajouter au conteneur mélangé
        imageArray.forEach(function (src) {
            // Créer un élément img avec jQuery
            let img = $('<img>').attr('src', src);
            // Ajouter l'image au conteneur mélangé
            shuffledContainer.append(img);
        });

        // Activer le drag & drop
        enableDragAndDrop();
    }

    // Fonction pour activer le drag & drop sur toutes les images
    function enableDragAndDrop() {
        // Rendre toutes les images draggables (déplaçables)
        $('.container img').draggable({
            revert: 'invalid',  // Revenir à la position initiale si drop invalide
            cursor: 'move',
            helper: 'clone'  // Créer un clone pendant le déplacement
        });

        // Rendre les deux conteneurs droppables (peuvent recevoir des images)
        $('.container').droppable({
            accept: 'img',  // Accepter uniquement les images
            drop: function (event, ui) {
                // Récupérer l'image déplacée
                let draggedImg = ui.draggable;

                // Détacher l'image de son ancien parent
                draggedImg.detach();

                // Ajouter l'image au nouveau conteneur
                $(this).append(draggedImg);

                // Réactiver le drag & drop pour cette image
                draggedImg.draggable({
                    revert: 'invalid',
                    cursor: 'move',
                    helper: 'clone'
                });
            }
        });
    }

    // Fonction pour vérifier si l'ordre est correct dans le conteneur arc-en-ciel
    function checkOrder() {
        // Tableau pour stocker l'ordre actuel des images dans le conteneur arc-en-ciel
        let currentOrder = [];

        // Parcourir toutes les images du conteneur arc-en-ciel
        rainbowContainer.find('img').each(function () {
            currentOrder.push($(this).attr('src'));
        });

        // Vérifier si on a bien 6 images
        if (currentOrder.length !== 6) {
            $('#message').text('Vous avez perdu').css('color', 'red');
            return;
        }

        // Vérifier si chaque image est à la bonne position
        let isCorrect = true;
        for (let i = 0; i < images.length; i++) {
            if (currentOrder[i] !== images[i]) {
                isCorrect = false;
                break;
            }
        }

        // Afficher le message selon le résultat
        if (isCorrect) {
            // Message vert si c'est correct
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            // Message rouge si c'est incorrect
            $('#message').text('Vous avez perdu').css('color', 'red');
        }
    }

    // Event click sur le bouton mélanger
    $('#shuffle-button').click(function () {
        // Mélanger les images
        let shuffled = shuffleArray(images);
        // Afficher les images mélangées dans le premier conteneur
        displayShuffledImages(shuffled);
        // Effacer le message
        $('#message').text('');
    });

    // Event click sur le bouton vérifier
    $('#check-button').click(function () {
        // Vérifier l'ordre des images
        checkOrder();
    });

    // Au chargement de la page, afficher les images mélangées
    let shuffled = shuffleArray(images);
    displayShuffledImages(shuffled);

});