<?php
// Ce code permet a l'utilisateur de pouvoir appuyer sur des bouton différents :
// changement du header du site
// changer la liste des éléments affichés
// rénitialiser les couleurs et/ la liste au chargement de la page(2 bouton différents)
// que quand on appuie sur cheatcode (code konami) le site lance une alerte vous ne devez pas tricher puis affiche une page error 404
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Interactif</title>
    <style>
        body {
            transition: background-color 0.5s;
            font-family: Arial, sans-serif;
            padding: 20px;
            min-height: 200vh;
            background-color: white;
        }

        h1 {
            transition: color 0.3s;
            color: black;
        }

        #itemList {
            list-style-type: none;
            padding: 20px;
            margin: 20px 0;
        }

        #itemList li {
            padding: 10px;
            margin: 5px 0;
            background-color: #f0f0f0;
            border-radius: 5px;
            color: black;
        }

        button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border: 2px solid black;
            border-radius: 5px;
            background-color: blue;
            color: white;
            font-size: 14px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: green;
        }

        .info {
            margin-top: 30px;
            padding: 15px;
            background-color: yellow;
            border-radius: 5px;
            border: 2px solid black;
        }

        .info h3 {
            color: black;
        }

        .info ul {
            color: black;
        }
    </style>
</head>

<body>
    <h1>Bienvenue sur le site interactif</h1>

    <div>
        <button id="changeHeaderBtn">Changer couleur du header</button>
        <button id="addItemBtn">Ajouter un élément</button>
        <button id="removeItemBtn">Supprimer un élément</button>
        <button id="resetBtn">Réinitialiser tout</button>
    </div>

    <ul id="itemList">
        <li>Pomme</li>
        <li>Carotte</li>
        <li>Mario</li>
    </ul>

    <div class="info">
        <h3>Fonctionnalités :</h3>
        <ul>
            <li>Scroll pour changer la couleur de fond</li>
            <li>Bouton pour changer la couleur du header</li>
            <li>Bouton pour ajouter/supprimer des éléments</li>
            <li>Bouton pour tout réinitialiser</li>
            <li>Code secret : tapez "cheatcode"</li>
        </ul>
    </div>

    <script src="./script.js"></script>
</body>

</html>