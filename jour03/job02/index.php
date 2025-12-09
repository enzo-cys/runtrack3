<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 02 - Arc-en-ciel</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
            padding: 10px;
            min-height: 80px;
            border: 2px dashed #ccc;
            background-color: #f9f9f9;
        }

        .container img {
            width: 50px;
            margin: 5px;
            cursor: move;
        }

        h3 {
            color: #333;
            margin-top: 30px;
        }

        #message {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <h1>Job 02 - Arc-en-ciel</h1>

    <button id="shuffle-button">Mélanger les images</button>
    <button id="check-button">Vérifier</button>

    <h3>Images mélangées</h3>
    <div id="shuffled-container" class="container">
        <!-- Les images mélangées seront ici -->
    </div>

    <h3>Reconstituez l'arc-en-ciel ici</h3>
    <div id="rainbow-container" class="container">
        <!-- Glissez les images ici dans le bon ordre -->
    </div>

    <div id="message"></div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="./script.js"></script>
</body>

</html>