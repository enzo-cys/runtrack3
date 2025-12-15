<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

     <!-- CSS Bootstrap -->
    <link href="./assets/bootstrap-5.3.8/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    <main class="container-fluid">
        <h1>Bonjour Bootstrap !</h1>
        <p>Mon premier site avec Bootstrap</p>
        <button class="btn btn-primary">Mon bouton</button>

    <section class="row gap-1 m-2">

        <article class="col-5" style="background-color: lightblue;">
            Colonne 1 (6 colonnes)
        </article>

        <article class="col-5" style="background-color: lightcoral;">
            Colonne 2 (6 colonnes)
        </article>
        
        <article class="row">
            <div class="col-8 bg-info">
                Colonne principale (8 colonnes)
            </div>
            <div class="col-4 bg-primary">
                Sidebar (4 colonnes)
            </div>
        </article>

        <article class="row">
            <div class="col-12 col-md-6 col-lg-4 bg-info border border-1 border-dark">
                Carte 1
            </div>
            <div class="col-12 col-md-6 col-lg-4 bg-secondary">
                Carte 2
            </div>
            <div class="col-12 col-md-6 col-lg-4 bg-dark">
                Carte 3
            </div>
        </article>

    </section>

    </main>

    <footer class="py-3 my-4"> 
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li> 
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li> 
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li> 
            </ul> 
            <p class="text-center text-body-secondary">© 2025 Company, Inc</p> 
    </footer>

<!-- Link scrip bootstrap -->
<script src="./assets/bootstrap-5.3.8/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>