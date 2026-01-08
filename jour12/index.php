<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O'Clock - Gestion du Temps</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <!-- Header -->
        <header class="text-center py-4">
            <h1 class="fw-bold">
                <i class="bi bi-clock-history"></i> O'Clock
            </h1>
        </header>

        <!-- Navigation -->
        <nav class="mb-4">
            <div class="d-flex justify-content-center flex-wrap gap-2">
                <button class="btn btn-nav active" data-tool="minuteur">
                    <i class="bi bi-hourglass-split"></i> Minuteur
                </button>
                <button class="btn btn-nav" data-tool="chronometre">
                    <i class="bi bi-stopwatch"></i> Chronomètre
                </button>
                <button class="btn btn-nav" data-tool="horloge">
                    <i class="bi bi-clock"></i> Horloge
                </button>
                <button class="btn btn-nav" data-tool="reveil">
                    <i class="bi bi-alarm"></i> Réveil
                </button>
            </div>
        </nav>

        <!-- Minuteur -->
        <section id="minuteur" class="tool-section active">
            <div class="card">
                <div class="card-body text-center">
                    <h2 class="card-title mb-4">
                        <i class="bi bi-hourglass-split"></i> Minuteur
                    </h2>

                    <div class="time-display mb-4" id="affichageMinuteur">00:00</div>

                    <div class="controls mb-4">
                        <div class="d-flex justify-content-center gap-2 mb-3">
                            <button class="btn btn-outline btn-lg" id="btnMinuteur1h">-1h</button>
                            <button class="btn btn-outline btn-lg" id="btnMinuteur10min">-10 min</button>
                            <button class="btn btn-outline btn-lg" id="btnMinuteurMoins">-1 min</button>
                            <input type="text" class="form-control form-control-lg text-center"
                                id="inputMinuteur" placeholder="MM:SS" maxlength="5" style="width: 120px;">
                            <button class="btn btn-outline btn-lg" id="btnMinuteurPlus">+1 min</button>
                            <button class="btn btn-outline btn-lg" id="btnMinuteur10minP">+10 min</button>
                            <button class="btn btn-outline btn-lg" id="btnMinuteur1hP">+1h</button>
                        </div>

                        <div class="d-flex justify-content-center gap-2">
                            <button class="btn btn-primary btn-lg" id="btnMinuteurStart">Démarrer</button>
                            <button class="btn btn-primary btn-lg d-none" id="btnMinuteurStop">Stop</button>
                            <button class="btn btn-danger btn-lg" id="btnMinuteurReset">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chronomètre -->
        <section id="chronometre" class="tool-section">
            <div class="card">
                <div class="card-body text-center">
                    <h2 class="card-title mb-4">
                        <i class="bi bi-stopwatch"></i> Chronomètre
                    </h2>

                    <div class="time-display mb-4" id="affichageChrono">00:00:00</div>

                    <div class="controls mb-4">
                        <div class="d-flex justify-content-center gap-2 mb-3">
                            <button class="btn btn-primary btn-lg" id="btnChronoToggle">Démarrer</button>
                            <button class="btn btn-outline btn-lg" id="btnChronoTour" disabled>Tour</button>
                            <button class="btn btn-danger btn-lg" id="btnChronoReset">Reset</button>
                        </div>
                    </div>

                    <div class="tours-container">
                        <div id="listeTours" class="list-group"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Horloge -->
        <section id="horloge" class="tool-section">
            <div class="card">
                <div class="card-body text-center">
                    <h2 class="card-title mb-4">
                        <i class="bi bi-clock"></i> Horloge
                    </h2>

                    <div class="time-display mb-4" id="affichageHorloge">00:00:00</div>
                </div>
            </div>
        </section>

        <!-- Réveil -->
        <section id="reveil" class="tool-section">
            <div class="card">
                <div class="card-body text-center">
                    <h2 class="card-title mb-4">
                        <i class="bi bi-alarm"></i> Réveil
                    </h2>

                    <div class="controls mb-4">
                        <div class="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                            <input type="time" class="form-control form-control-lg" id="inputReveilHeure" style="width: 150px;">
                            <input type="text" class="form-control form-control-lg"
                                id="inputReveilMessage" placeholder="Message" style="width: 250px;">
                            <button class="btn btn-primary btn-lg" id="btnReveilAjouter">Ajouter</button>
                        </div>
                    </div>

                    <div class="alarmes-container">
                        <div id="listeAlarmes" class="list-group"></div>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>

</html>