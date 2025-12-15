<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaPlateforme_ - Job 01</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <style>
        body {
            background-color: #d9d9d9;
        }
    </style>
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LPTF</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="https://laplateforme.io" target="_blank">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Units</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Titre principal centré -->
    <div class="container-fluid">
        <h1 class="text-center my-4 display-5 text-secondary">LaPlateforme_</h1>
    </div>

    <!-- Contenu principal -->
    <div class="container-fluid px-4">
        <div class="row g-3">
            <!-- Carte Papillon - Colonne gauche -->
            <div class="col-lg-2 col-md-4">
                <div class="card">
                    <img src="papillon.png" class="card-img-top" alt="Un Papillon">
                    <div class="card-body">
                        <h5 class="card-title">Un Papillon</h5>
                        <p class="card-text">Un papillon, c'est un peu comme une chenille, mais avec des ailes. Ne pas ingérer.</p>
                        <button class="btn btn-primary" id="buyButton">Commander votre propre papillon</button>
                    </div>
                </div>
            </div>

            <!-- Jumbotron central -->
            <div class="col-lg-8 col-md-8">
                <div class="bg-light p-4 rounded-3" id="jumbotron">
                    <h2>Bonjour, monde!</h2>
                    <p class="fst-italic">Il existe plusieurs visions du terme :</p>
                    <p>Le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.</p>
                    <p>Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
                    <p class="text-muted small">Le sens étendu désigne l'univers dans son ensemble.</p>

                    <div class="d-flex align-items-center gap-3 my-3">
                        <button class="btn btn-danger" id="rebootButton">Rebooter le Monde</button>
                        <div class="spinner-border text-info" role="status" id="spinner">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-end">
                            <li class="page-item"><a class="page-link" href="#">«</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">»</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Liste groupée - Colonne droite -->
            <div class="col-lg-2 col-md-12">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Limbes</a>
                    <a href="#" class="list-group-item list-group-item-action">Luxure</a>
                    <a href="#" class="list-group-item list-group-item-action">Gourmandise</a>
                    <a href="#" class="list-group-item list-group-item-action">Avarice</a>
                    <a href="#" class="list-group-item list-group-item-action">Colère</a>
                    <a href="#" class="list-group-item list-group-item-action">Hérésie</a>
                    <a href="#" class="list-group-item list-group-item-action">Violence</a>
                    <a href="#" class="list-group-item list-group-item-action">Ruse et Tromperie</a>
                    <a href="#" class="list-group-item list-group-item-action">Trahison</a>
                    <a href="#" class="list-group-item list-group-item-action">Internet Explorer</a>
                </div>
            </div>
        </div>

        <!-- Barre de progression AI 9000 -->
        <div class="row mt-4">
            <div class="col-12 text-center">
                <div class="d-inline-block position-relative" style="width: 100%; max-width: 900px;">
                    <div class="text-end mb-2">
                        <span class="fw-bold">Installation de AI 9000</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="me-2" style="cursor: pointer;">«|</span>
                        <div class="progress flex-grow-1" style="height: 30px;">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span class="ms-2" style="cursor: pointer;">|»</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Formulaires en bas -->
        <div class="row mt-3 pb-4">
            <!-- Formulaire Internet 2 -->
            <div class="col-lg-3 offset-lg-2">
                <div style="max-width: 400px;">
                    <h6 class="mb-3">Recevez votre copie gratuite d'internet 2!</h6>

                    <div class="mb-3">
                        <div class="d-flex border rounded">
                            <input type="text" class="form-control border-0" value="@" disabled style="max-width: 40px;">
                            <input type="text" class="form-control border-0" placeholder="Login" aria-label="Login">
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="d-flex border rounded">
                            <input type="password" class="form-control border-0" placeholder="Mot de Passe" aria-label="Mot de Passe">
                            <input type="text" class="form-control border-0" value="@example.com" disabled style="max-width: 150px;">
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label small">URL des Internets 2 et 2.1 Beta</label>
                        <div class="d-flex border rounded">
                            <input type="text" class="form-control border-0" value="DogeCoin" disabled style="max-width: 100px;">
                            <div class="flex-grow-1 bg-white"></div>
                            <input type="text" class="form-control border-0" value=".00" disabled style="max-width: 60px;">
                        </div>
                    </div>

                    <div class="mb-0">
                        <div class="d-flex border rounded">
                            <input type="text" class="form-control border-0" value="https://i33t.lptf.dev/b.berluscommunity/" disabled style="max-width: 300px;">
                            <div class="flex-grow-1 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Formulaire de connexion -->
            <div class="col-lg-3 offset-lg-2">
                <div style="max-width: 400px;">
                    <h6 class="mb-3">&nbsp;</h6>

                    <form id="loginForm">
                        <div class="mb-3">
                            <label for="emailAddress" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input type="password" class="form-control" id="passwordInput">
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="checkMeOut">
                            <label class="form-check-label" for="checkMeOut">Check me out</label>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modale pour l'achat de papillon -->
    <div class="modal fade" id="butterflyModal" tabindex="-1" aria-labelledby="butterflyModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="butterflyModalLabel">Confirmation d'achat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Merci pour votre achat d'un papillon !
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modale pour le récapitulatif du formulaire -->
    <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formModalLabel">Récapitulatif du formulaire</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="formRecap">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>

</html>