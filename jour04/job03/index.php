<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Filtrage Pokémon</title>
</head>

<body>
    <h1>Filtrage des Pokémon</h1>

    <!-- Formulaire de filtrage -->
    <form id="filterForm">
        <!-- Champ pour filtrer par ID -->
        <label for="id">ID:</label>
        <input type="text" id="id" name="id">

        <!-- Champ pour filtrer par nom -->
        <label for="nom">Nom:</label>
        <input type="text" id="nom" name="nom">

        <!-- Liste déroulante pour filtrer par type -->
        <label for="type">Type:</label>
        <select id="type" name="type">
            <option value="">Tous</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
        </select>

        <!-- Bouton pour lancer le filtrage -->
        <input type="button" id="filtrer" value="Filtrer">
    </form>

    <!-- Zone d'affichage des résultats -->
    <div id="results"></div>

    <!-- Chargement du script JavaScript -->
    <script src="script.js"></script>
</body>

</html>