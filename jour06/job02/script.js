$(document).ready(function() {
    // Citations de Blade Runner
    const bladeRunnerQuotes = [
        "T'endors pas, c'est l'heure de mourir.",
        "J'en ai vu des choses que vous, humains, ne pourriez pas croire.",
        "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie.",
        "C'est dommage qu'elle ne vive pas ! Mais qui le fait ?",
        "Plus humain que l'humain, telle est notre devise.",
        "Je veux plus de vie, père.",
        "Questions : morphologie, longevité, incept dates...",
        "Vous avez peur de mourir ? C'est pas vos affaires."
    ];

    // Contenu de pagination - Citations d'Overlord
    const paginationContent = [
        {
            title: "Citation d'Overlord - Page 1",
            content: "Je ne suis pas enclin à aider quelqu'un à mes pieds qui ne peut que prier pour que le salut vienne. Comme une plante sur laquelle les pluies tombent du ciel. Cependant, si vous êtes quelqu'un qui lutte pour vivre..."
        },
        {
            title: "Citation d'Overlord - Page 2",
            content: "J'apprécie la façon dont cela s'inscrit dans la philosophie d'Ainz. Cette faiblesse, dans le sens où l'on n'essaie pas activement de s'améliorer, est un péché."
        },
        {
            title: "Citation d'Overlord - Page 3",
            content: "Quelle est votre citation préférée d'Overlord ? Il est difficile d'en choisir un, mais celle qui reflète la philosophie d'Ainz sur la lutte et l'amélioration personnelle reste mémorable."
        }
    ];

    // 1. Le bouton de la carte "papillon" doit afficher une modale
    $('#buyButton').click(function() {
        const modal = new bootstrap.Modal(document.getElementById('butterflyModal'));
        modal.show();
    });

    // 2. Le bouton "Rebooter le Monde" doit afficher une citation aléatoire de Blade Runner
    $('#rebootButton').click(function() {
        const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
        $('#jumbotron').html('<h2>Citation de Blade Runner</h2><p class="fst-italic">' + randomQuote + '</p>');
    });

    // 3. La pagination doit modifier le contenu du jumbotron
    $('.pagination .page-link').click(function(e) {
        e.preventDefault();
        const text = $(this).text();
        
        if (text === '«' || text === '»') {
            return;
        }
        
        const pageNum = parseInt(text) - 1;
        if (paginationContent[pageNum]) {
            const page = paginationContent[pageNum];
            $('#jumbotron').html('<h2>' + page.title + '</h2><p>' + page.content + '</p>');
        }
    });

    // 4. Cliquer sur un élément de la liste groupée doit le rendre actif
    $('.list-group-item').click(function(e) {
        e.preventDefault();
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });

    // 5. Les boutons de la progress bar doivent faire progresser/régresser
    let progressValue = 75;
    
    $('span:contains("«|")').click(function() {
        if (progressValue > 0) {
            progressValue = Math.max(0, progressValue - 10);
            $('.progress-bar').css('width', progressValue + '%').attr('aria-valuenow', progressValue);
        }
    });

    $('span:contains("|»")').click(function() {
        if (progressValue < 100) {
            progressValue = Math.min(100, progressValue + 10);
            $('.progress-bar').css('width', progressValue + '%').attr('aria-valuenow', progressValue);
        }
    });

    // 6. Presser D, G, C dans l'ordre doit afficher une modale avec les infos du formulaire
    let keySequence = [];
    const targetSequence = ['d', 'g', 'c'];

    $(document).keydown(function(e) {
        const key = e.key.toLowerCase();
        
        if (key === targetSequence[keySequence.length]) {
            keySequence.push(key);
            
            if (keySequence.length === targetSequence.length) {
                // Récupérer les valeurs du formulaire de gauche
                const login = $('input[placeholder="Login"]').val() || 'Non renseigné';
                const password = $('input[placeholder="Mot de Passe"]').val() || 'Non renseigné';
                const dogecoin = $('input[value="DogeCoin"]').val() || 'DogeCoin';
                const dogecoinValue = $('input[value=".00"]').val() || '.00';
                const url = $('input[value^="https://i33t"]').val() || 'Non renseigné';
                
                const recapHTML = `
                    <p><strong>Login:</strong> @${login}</p>
                    <p><strong>Mot de Passe:</strong> ${password}</p>
                    <p><strong>DogeCoin:</strong> ${dogecoin}${dogecoinValue}</p>
                    <p><strong>URL:</strong> ${url}</p>
                `;
                
                $('#formRecap').html(recapHTML);
                
                const modal = new bootstrap.Modal(document.getElementById('formModal'));
                modal.show();
                
                keySequence = [];
            }
        } else {
            keySequence = [];
        }
    });

    // 7. Valider le formulaire doit changer la couleur du spinner
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        
        const email = $('#emailAddress').val();
        const password = $('#passwordInput').val();
        
        if (email && password) {
            const colors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark'];
            const currentColor = colors[Math.floor(Math.random() * colors.length)];
            
            $('#spinner').removeClass('text-primary text-secondary text-success text-danger text-warning text-info text-light text-dark');
            $('#spinner').addClass(currentColor);
        }
    });
});
