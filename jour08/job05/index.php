<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overlord - Contrôle absolu</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="bg-slate-950 text-white">
    <!-- Header -->
    <header class="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-lg font-black">Cys</div>
                <span class="text-lg font-bold">Overlord</span>
            </div>
            <nav class="hidden md:flex items-center gap-6 text-sm">
                <a class="text-slate-400 hover:text-white transition" href="#">Fonctionnalités</a>
                <a class="text-slate-400 hover:text-white transition" href="#">Commandants</a>
                <a class="text-slate-400 hover:text-white transition" href="#">Tarifs</a>
                <a class="text-slate-400 hover:text-white transition" href="#">Ressources</a>
            </nav>
            <div class="flex items-center gap-3">
                <button class="text-sm text-slate-300 hover:text-white transition">Connexion</button>
                <button class="bg-red-600 hover:bg-red-700 text-sm font-semibold px-4 py-2 rounded transition">Essai gratuit</button>
            </div>
        </div>
    </header>

    <!-- Hero -->
    <section class="max-w-6xl mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
            <div class="space-y-6">
                <p class="text-xs uppercase tracking-[0.25em] text-red-500">Nazarick · Contrôle total</p>
                <h1 class="text-4xl md:text-5xl font-black leading-tight">
                    Réduis le temps de conquête et tes faiblesses de moitié. Instantanément.
                </h1>
                <p class="text-lg text-slate-400">
                    Revue stratégique assistée par le grand Ainz, pour des seigneurs qui avancent vite sans perdre le contrôle.
                </p>
                <div class="flex flex-wrap gap-4">
                    <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded transition shadow-lg shadow-red-700/30">
                        Essayer gratuitement
                    </button>
                    <button class="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold px-5 py-3 rounded transition">
                        Voir la démo
                    </button>
                </div>
                <p class="text-sm text-slate-500">14 jours d'essai · 2 clics avec GitHub / GitLab · Carte non requise</p>
            </div>

            <!-- Mocked preview cards -->
            <div class="grid gap-4">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg">
                    <div class="flex items-center gap-3 mb-3 text-sm text-slate-300">
                        <span class="px-2 py-1 rounded bg-slate-800">@ainz</span>
                        <span class="text-red-400">Potentiel risque</span>
                        <span class="text-xs text-slate-500">il y a 1 min</span>
                    </div>
                    <div class="rounded-lg bg-slate-800/70 p-4 text-slate-200 text-sm">
                        Un sort inconnu pourrait remplacer le statut. Vérifie les codes avant d'envoyer l'armée.
                    </div>
                    <button class="mt-3 text-sm text-red-400 hover:text-white transition">Suggérer une correction</button>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg">
                    <div class="flex items-center justify-between mb-2 text-sm text-slate-300">
                        <span>Discussion d'équipe</span>
                        <span class="text-xs text-slate-500">canal #nazarick</span>
                    </div>
                    <div class="space-y-2 text-sm text-slate-200">
                        <p><span class="text-red-400">•</span> Favoriser l'import explicite pour éviter les fuites.</p>
                        <p><span class="text-red-400">•</span> Ajouter tests avant déploiement sur le Royaume.</p>
                        <p class="text-slate-500">Répondu par Albedo · il y a 2 min</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="border-t border-b border-slate-800 bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-3 text-center">
            <div>
                <div class="text-5xl font-black text-white">10</div>
                <p class="text-red-400 font-semibold mt-2">Étages de Nazarick</p>
            </div>
            <div>
                <div class="text-5xl font-black text-white">13M</div>
                <p class="text-red-400 font-semibold mt-2">Sorts analysés</p>
            </div>
            <div>
                <div class="text-5xl font-black text-white">∞</div>
                <p class="text-red-400 font-semibold mt-2">Pouvoirs invoqués</p>
            </div>
        </div>
    </section>

    <!-- Confiance -->
    <section class="max-w-6xl mx-auto px-4 py-12 text-center">
        <p class="text-slate-400 text-sm">Plébiscité par 10 000+ seigneurs et guildes</p>
        <div class="mt-6 flex flex-wrap justify-center gap-6 text-slate-600 text-sm">
            <span class="px-4 py-2 border border-slate-800 rounded">Bahamut Corp</span>
            <span class="px-4 py-2 border border-slate-800 rounded">Sorciers de Re-Estize</span>
            <span class="px-4 py-2 border border-slate-800 rounded">Rois Dragon</span>
            <span class="px-4 py-2 border border-slate-800 rounded">Guilde Obsidienne</span>
        </div>
    </section>

    <!-- Points forts -->
    <section class="bg-slate-950 border-t border-b border-slate-800">
        <div class="max-w-6xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
            <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
                <h3 class="text-xl font-bold mb-3">Vue rapide</h3>
                <p class="text-slate-400 text-sm">Résumé des risques, statut des sorts et actions proposées en un clin d'œil.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
                <h3 class="text-xl font-bold mb-3">Conseils d'Ainz</h3>
                <p class="text-slate-400 text-sm">Ainz vous suggère les corrections avant un assaut pour limiter les pertes.</p>
            </div>
            <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
                <h3 class="text-xl font-bold mb-3">Déploiement sûr</h3>
                <p class="text-slate-400 text-sm">2 clics pour valider, tester et lancer l'armée sur GitHub ou GitLab.</p>
            </div>
        </div>
    </section>

    <!-- CTA finale -->
    <section class="max-w-6xl mx-auto px-4 py-16 text-center">
        <h3 class="text-3xl font-black mb-4">Prêt à régner sur Nazarick !</h3>
        <p class="text-slate-400 mb-8">Active ton essai gratuit et prends le contrôle du Nouveau Monde.</p>
        <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition shadow-lg shadow-red-700/30">Lancer l'essai</button>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-800 bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
            <span>© 2025 Overlord · Tous droits réservés à Enzo</span>
            <div class="flex gap-4">
                <a href="#" class="hover:text-white transition">Confidentialité</a>
                <a href="#" class="hover:text-white transition">Conditions</a>
                <a href="#" class="hover:text-white transition">Support</a>
            </div>
        </div>
    </footer>
</body>

</html>