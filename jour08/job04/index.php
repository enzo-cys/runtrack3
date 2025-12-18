<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de compte</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body class="bg-slate-50 flex flex-col min-h-screen">
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

    <main class="flex-grow flex items-center justify-center py-12 px-4">
        <section class="w-full max-w-md">
            <div class="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <h1 class="text-3xl font-bold text-slate-800 mb-8 text-center">Créer un compte</h1>
                <form action="#" method="post" class="space-y-6">
                    <!-- Civilité -->
                    <fieldset class="space-y-3">
                        <legend class="text-lg font-semibold text-slate-700 mb-3">
                            <i class="fas fa-user text-red-500 mr-2"></i>Civilité
                        </legend>
                        <div class="space-y-2 ml-6">
                            <label class="flex items-center cursor-pointer group">
                                <input type="radio" name="civilite" value="monsieur" checked class="w-4 h-4 text-red-600 cursor-pointer">
                                <span class="ml-3 text-slate-700 group-hover:text-red-600 transition">Monsieur</span>
                            </label>
                            <label class="flex items-center cursor-pointer group">
                                <input type="radio" name="civilite" value="madame" class="w-4 h-4 text-red-600 cursor-pointer">
                                <span class="ml-3 text-slate-700 group-hover:text-red-600 transition">Madame</span>
                            </label>
                            <label class="flex items-center cursor-pointer group">
                                <input type="radio" name="civilite" value="autre" class="w-4 h-4 text-red-600 cursor-pointer">
                                <span class="ml-3 text-slate-700 group-hover:text-red-600 transition">Autre</span>
                            </label>
                        </div>
                    </fieldset>

                    <!-- Prénom -->
                    <div>
                        <label for="prenom" class="block text-sm font-semibold text-slate-700 mb-2">
                            <i class="fas fa-pen text-red-500 mr-2"></i>Prénom
                        </label>
                        <input type="text" id="prenom" name="prenom" required class="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition shadow-sm hover:border-slate-300">
                    </div>

                    <!-- Nom -->
                    <div>
                        <label for="nom" class="block text-sm font-semibold text-slate-700 mb-2">
                            <i class="fas fa-pen text-red-500 mr-2"></i>Nom
                        </label>
                        <input type="text" id="nom" name="nom" required class="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition shadow-sm hover:border-slate-300">
                    </div>

                    <!-- Adresse -->
                    <div>
                        <label for="adresse" class="block text-sm font-semibold text-slate-700 mb-2">
                            <i class="fas fa-map-pin text-red-500 mr-2"></i>Adresse
                        </label>
                        <input type="text" id="adresse" name="adresse" required class="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition shadow-sm hover:border-slate-300">
                    </div>

                    <!-- Email -->
                    <div>
                        <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">
                            <i class="fas fa-envelope text-red-500 mr-2"></i>Email
                        </label>
                        <input type="email" id="email" name="email" required class="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition shadow-sm hover:border-slate-300">
                    </div>

                    <!-- Mot de passe -->
                    <div>
                        <label for="motdepasse" class="block text-sm font-semibold text-slate-700 mb-2">
                            <i class="fas fa-lock text-red-500 mr-2"></i>Mot de passe
                        </label>
                        <input type="password" id="motdepasse" name="motdepasse" required class="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition shadow-sm hover:border-slate-300">
                    </div>

                    <!-- Confirmation mot de passe -->
                    <div>
                        <label for="confirmation" class="block text-sm font-semibold text-slate-700 mb-2">
                            <i class="fas fa-lock text-red-500 mr-2"></i>Confirmez le mot de passe
                        </label>
                        <input type="password" id="confirmation" name="confirmation" required class="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition shadow-sm hover:border-slate-300">
                    </div>

                    <!-- Passions -->
                    <fieldset class="space-y-3 pt-4">
                        <legend class="text-lg font-semibold text-slate-700 mb-3">
                            <i class="fas fa-heart text-red-500 mr-2"></i>Vos passions
                        </legend>
                        <div class="space-y-2 ml-6">
                            <label class="flex items-center cursor-pointer group">
                                <input type="checkbox" name="passions[]" value="informatique" class="w-4 h-4 text-red-600 rounded cursor-pointer">
                                <i class="fas fa-laptop ml-3 text-red-500"></i>
                                <span class="ml-2 text-slate-700 group-hover:text-red-600 transition">Informatique</span>
                            </label>
                            <label class="flex items-center cursor-pointer group">
                                <input type="checkbox" name="passions[]" value="voyages" class="w-4 h-4 text-red-600 rounded cursor-pointer">
                                <i class="fas fa-plane ml-3 text-red-500"></i>
                                <span class="ml-2 text-slate-700 group-hover:text-red-600 transition">Voyages</span>
                            </label>
                            <label class="flex items-center cursor-pointer group">
                                <input type="checkbox" name="passions[]" value="sport" class="w-4 h-4 text-red-600 rounded cursor-pointer">
                                <i class="fas fa-basketball ml-3 text-red-500"></i>
                                <span class="ml-2 text-slate-700 group-hover:text-red-600 transition">Sport</span>
                            </label>
                            <label class="flex items-center cursor-pointer group">
                                <input type="checkbox" name="passions[]" value="lecture" class="w-4 h-4 text-red-600 rounded cursor-pointer">
                                <i class="fas fa-book ml-3 text-red-500"></i>
                                <span class="ml-2 text-slate-700 group-hover:text-red-600 transition">Lecture</span>
                            </label>
                        </div>
                    </fieldset>

                    <!-- Bouton de validation -->
                    <button type="submit" class="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 mt-8">
                        <i class="fas fa-check-circle"></i>
                        Valider
                    </button>
                </form>
            </div>
        </section>
    </main>

    <footer class="bg-red-700 shadow-lg mt-12">
        <div class="max-w-7xl mx-auto px-4 py-8">
            <ul class="flex justify-center gap-8">
                <li><a href="index.php" class="text-white font-semibold hover:text-red-300 transition duration-300">Accueil</a></li>
                <li><a href="index.php" class="text-white font-semibold hover:text-red-300 transition duration-300">Inscription</a></li>
                <li><a href="index.php" class="text-white font-semibold hover:text-red-300 transition duration-300">Connexion</a></li>
                <li><a href="index.php" class="text-white font-semibold hover:text-red-300 transition duration-300">Rechercher</a></li>
            </ul>
            <p class="text-center text-slate-400 text-sm mt-4">© 2025 Tous droits réservés</p>
        </div>
    </footer>
</body>

</html>