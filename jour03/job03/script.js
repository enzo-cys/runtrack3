// Job 03 - Jeu du Taquin

// Attendre que le document soit complètement chargé
$(document).ready(function () {

    // Chemin de l'image complète du logo à reconstituer
    const logoImage = 'images/logo.png';

    // L'ordre correct des pièces (0 à 8, où 8 est la case vide)
    const correctOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // Tableau pour stocker l'ordre actuel des pièces
    let currentOrder = [];

    // Variable pour savoir si le jeu est actif
    let gameActive = true;

    // Fonction pour mélanger un tableau
    function shuffleArray(array) {
        let shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Fonction pour créer et afficher le plateau de jeu
    function createBoard(order) {
        // Sélectionner le plateau
        const board = $('#puzzle-board');
        // Vider le plateau
        board.empty();

        // Parcourir chaque position
        order.forEach(function (pieceNum, index) {
            // Créer une div pour la pièce
            let piece = $('<div>')
                .addClass('puzzle-piece')
                .attr('data-position', index)
                .attr('data-piece', pieceNum);

            // Si c'est la dernière pièce (8), c'est la case vide
            if (pieceNum === 8) {
                piece.addClass('empty');
            } else {
                // Calculer la position du morceau dans l'image complète
                // L'image fait 300x300px, chaque morceau fait 100x100px
                let row = Math.floor(pieceNum / 3);
                let col = pieceNum % 3;
                piece.css({
                    'background-image': 'url(' + logoImage + ')',
                    'background-position': (-col * 100) + 'px ' + (-row * 100) + 'px'
                });
            }

            // Ajouter la pièce au plateau
            board.append(piece);
        });

        // Ajouter les événements de clic
        attachClickEvents();
    }

    // Fonction pour ajouter les événements de clic sur les pièces
    function attachClickEvents() {
        // Sélectionner toutes les pièces sauf la case vide
        $('.puzzle-piece:not(.empty)').click(function () {
            // Vérifier si le jeu est actif
            if (!gameActive) return;

            // Récupérer la position de la pièce cliquée
            let clickedPos = parseInt($(this).attr('data-position'));
            // Trouver la position de la case vide
            let emptyPos = findEmptyPosition();

            // Vérifier si la pièce est adjacente à la case vide
            if (isAdjacent(clickedPos, emptyPos)) {
                // Échanger les pièces
                swapPieces(clickedPos, emptyPos);
                // Vérifier si le joueur a gagné
                if (checkWin()) {
                    gameWon();
                }
            }
        });
    }

    // Fonction pour trouver la position de la case vide
    function findEmptyPosition() {
        // Parcourir le tableau pour trouver où est la pièce 8 (case vide)
        for (let i = 0; i < currentOrder.length; i++) {
            if (currentOrder[i] === 8) {
                return i;
            }
        }
        return -1;
    }

    // Fonction pour vérifier si deux positions sont adjacentes
    function isAdjacent(pos1, pos2) {
        // Calculer la ligne et la colonne de chaque position
        let row1 = Math.floor(pos1 / 3);
        let col1 = pos1 % 3;
        let row2 = Math.floor(pos2 / 3);
        let col2 = pos2 % 3;

        // Vérifier si les positions sont adjacentes (pas en diagonale)
        // Adjacent horizontalement : même ligne, colonnes voisines
        let horizontalAdjacent = (row1 === row2) && (Math.abs(col1 - col2) === 1);
        // Adjacent verticalement : même colonne, lignes voisines
        let verticalAdjacent = (col1 === col2) && (Math.abs(row1 - row2) === 1);

        return horizontalAdjacent || verticalAdjacent;
    }

    // Fonction pour échanger deux pièces
    function swapPieces(pos1, pos2) {
        // Échanger les valeurs dans le tableau
        let temp = currentOrder[pos1];
        currentOrder[pos1] = currentOrder[pos2];
        currentOrder[pos2] = temp;

        // Recréer le plateau avec le nouvel ordre
        createBoard(currentOrder);
    }

    // Fonction pour vérifier si le joueur a gagné
    function checkWin() {
        // Comparer l'ordre actuel avec l'ordre correct
        for (let i = 0; i < correctOrder.length; i++) {
            if (currentOrder[i] !== correctOrder[i]) {
                return false;
            }
        }
        return true;
    }

    // Fonction appelée quand le joueur gagne
    function gameWon() {
        // Désactiver le jeu
        gameActive = false;
        // Afficher le message de victoire en vert
        $('#message').text('Vous avez gagné').css('color', 'green');
        // Afficher le bouton recommencer
        $('#restart-button').show();
    }

    // Event click sur le bouton recommencer
    $('#restart-button').click(function () {
        // Réactiver le jeu
        gameActive = true;
        // Effacer le message
        $('#message').text('');
        // Cacher le bouton recommencer
        $(this).hide();
        // Mélanger et relancer le jeu
        currentOrder = shuffleArray(correctOrder);
        createBoard(currentOrder);
    });

    // Initialiser le jeu au chargement de la page
    // Mélanger l'ordre des pièces
    currentOrder = shuffleArray(correctOrder);
    // Créer le plateau
    createBoard(currentOrder);

});