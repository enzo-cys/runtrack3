<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Jeu du Taquin</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        #puzzle-board {
            display: inline-grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 2px;
            background-color: #333;
            padding: 2px;
            margin: 20px auto;
        }

        .puzzle-piece {
            width: 100px;
            height: 100px;
            background-size: 300px 300px;
            background-repeat: no-repeat;
            cursor: pointer;
            border: 1px solid #ccc;
        }

        .puzzle-piece.empty {
            background-color: #ddd;
            cursor: default;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
        }

        #message {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }

        #restart-button {
            display: none;
        }
    </style>
</head>

<body>
    <h1>Job 03 - Jeu du Taquin</h1>
    <p>Cliquez sur une pièce adjacente à la case vide pour la déplacer</p>

    <div id="puzzle-board">
        <!-- Les pièces du puzzle seront générées par jQuery -->
    </div>

    <button id="restart-button">Recommencer</button>

    <div id="message"></div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="./script.js"></script>
</body>

</html>