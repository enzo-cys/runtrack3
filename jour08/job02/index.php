<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de compte</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <header class="bg-red-600 shadow-lg">
        <nav class="max-w-7xl mx-auto px-4 py-4">
            <ul class="flex justify-center gap-8">
                <li><a href="index.php" class="text-white font-semibold hover:text-red-200 transition duration-300">Accueil</a></li>
                <li><a href="index.php" class="text-white font-semibold hover:text-red-200 transition duration-300">Inscription</a></li>
                <li><a href="index.php" class="text-white font-semibold hover:text-red-200 transition duration-300">Connexion</a></li>
                <li><a href="index.php" class="text-white font-semibold hover:text-red-200 transition duration-300">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h1>Créer un compte</h1>
            <form action="#" method="post">
                <fieldset>
                    <legend>Civilité</legend>
                    <label>
                        <input type="radio" name="civilite" value="monsieur" checked>
                        Monsieur
                    </label>
                    <label>
                        <input type="radio" name="civilite" value="madame">
                        Madame
                    </label>
                    <label>
                        <input type="radio" name="civilite" value="autre">
                        Autre
                    </label>
                </fieldset>

                <div>
                    <label for="prenom">Prénom</label>
                    <input type="text" id="prenom" name="prenom" required>
                </div>

                <div>
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" required>
                </div>

                <div>
                    <label for="adresse">Adresse</label>
                    <input type="text" id="adresse" name="adresse" required>
                </div>

                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div>
                    <label for="motdepasse">Mot de passe</label>
                    <input type="password" id="motdepasse" name="motdepasse" required>
                </div>

                <div>
                    <label for="confirmation">Confirmez le mot de passe</label>
                    <input type="password" id="confirmation" name="confirmation" required>
                </div>

                <fieldset>
                    <legend>Passions</legend>
                    <label>
                        <input type="checkbox" name="passions[]" value="informatique">
                        Informatique
                    </label>
                    <label>
                        <input type="checkbox" name="passions[]" value="voyages">
                        Voyages
                    </label>
                    <label>
                        <input type="checkbox" name="passions[]" value="sport">
                        Sport
                    </label>
                    <label>
                        <input type="checkbox" name="passions[]" value="lecture">
                        Lecture
                    </label>
                </fieldset>

                <button type="submit">Valider</button>
            </form>
        </section>
    </main>

    <footer>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="index.php">Inscription</a></li>
            <li><a href="index.php">Connexion</a></li>
            <li><a href="index.php">Rechercher</a></li>
        </ul>
    </footer>
</body>

</html>