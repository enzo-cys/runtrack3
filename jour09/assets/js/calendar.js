// Gestion du calendrier et des demandes de présence
(function() {
    'use strict';

    // Vérifier si la date est dans le passé
    function isPastDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    }

    // Formater une date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR');
    }

    // Définir la date minimale (aujourd'hui)
    function setMinDate() {
        const dateInput = document.getElementById('presenceDate');
        if (dateInput) {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            dateInput.min = `${year}-${month}-${day}`;
        }
    }

    // Ajouter une demande de présence
    window.addPresenceRequest = function(event) {
        event.preventDefault();

        const currentUser = getCurrentUser();
        if (!currentUser) {
            alert('Vous devez être connecté');
            window.location.href = 'login.html';
            return;
        }

        const date = document.getElementById('presenceDate').value;
        const note = document.getElementById('presenceNote').value.trim();

        if (!date) {
            alert('Veuillez sélectionner une date');
            return;
        }

        if (isPastDate(date)) {
            alert('Impossible de demander une présence pour une date passée');
            return;
        }

        // Vérifier si une demande existe déjà pour cette date
        const requests = JSON.parse(localStorage.getItem('requests')) || [];
        const existingRequest = requests.find(r => 
            r.userId === currentUser.id && r.date === date
        );

        if (existingRequest) {
            alert('Vous avez déjà une demande pour cette date');
            return;
        }

        // Créer la demande
        const newRequest = {
            id: Date.now(),
            userId: currentUser.id,
            userName: `${currentUser.prenom} ${currentUser.nom}`,
            userEmail: currentUser.email,
            date: date,
            note: note,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        requests.push(newRequest);
        localStorage.setItem('requests', JSON.stringify(requests));

        alert('Votre demande de présence a été enregistrée');
        document.getElementById('presenceDate').value = '';
        document.getElementById('presenceNote').value = '';
        
        loadUserRequests();
        refreshFullCalendar();
    };

    // Charger les demandes de l'utilisateur
    window.loadUserRequests = function() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        const requestsContainer = document.getElementById('userRequestsList');
        if (!requestsContainer) return;

        const requests = JSON.parse(localStorage.getItem('requests')) || [];
        const userRequests = requests.filter(r => r.userId === currentUser.id)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        if (userRequests.length === 0) {
            requestsContainer.innerHTML = '<p class="text-secondary">Aucune demande de présence</p>';
            return;
        }

        let html = '<div class="table-responsive"><table class="table align-middle">';
        html += '<thead><tr><th>Date</th><th>Statut</th><th>Commentaire</th></tr></thead><tbody>';

        userRequests.forEach(request => {
            const statusClass = request.status === 'approved' ? 'success' : 
                              request.status === 'rejected' ? 'danger' : 'warning';
            const statusText = request.status === 'approved' ? 'Validée' : 
                             request.status === 'rejected' ? 'Refusée' : 'En attente';
            const statusIconHtml = request.status === 'approved'
                ? '<i class="bi bi-check-lg text-success"></i>'
                : request.status === 'rejected'
                    ? '<i class="bi bi-x-lg text-danger"></i>'
                    : '<i class="bi bi-clock text-warning"></i>';

            html += `
                <tr>
                    <td>${formatDate(request.date)}</td>
                    <td>${statusIconHtml} <span class="badge text-bg-${statusClass}">${statusText}</span></td>
                    <td>${request.note || '-'}</td>
                </tr>
            `;
        });

        html += '</tbody></table></div>';
        requestsContainer.innerHTML = html;
    };

    // Initialiser FullCalendar
    window.initializeFullCalendar = function() {
        const calendarElement = document.getElementById('calendar');
        if (!calendarElement) return;

        const currentUser = getCurrentUser();
        if (!currentUser) return;

        // Charger les demandes de l'utilisateur depuis localStorage
        const requests = JSON.parse(localStorage.getItem('requests')) || [];
        const userRequests = requests.filter(r => r.userId === currentUser.id);

        // Convertir les demandes en événements pour FullCalendar
        const events = userRequests.map(request => {
            let backgroundColor, borderColor, textColor, statusIconClass;
            if (request.status === 'approved') {
                backgroundColor = '#28a745';
                borderColor = '#28a745';
                textColor = '#ffffff';
                statusIconClass = 'bi bi-check-lg text-success-emphasis';
            } else if (request.status === 'rejected') {
                backgroundColor = '#dc3545';
                borderColor = '#dc3545';
                textColor = '#ffffff';
                statusIconClass = 'bi bi-x-lg text-danger-emphasis';
            } else {
                backgroundColor = '#ffc107';
                borderColor = '#ffc107';
                textColor = '#000000';
                statusIconClass = 'bi bi-clock text-warning-emphasis';
            }
            return {
                id: String(request.id),
                title: 'Présence',
                start: request.date,
                allDay: true,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                textColor: textColor,
                extendedProps: {
                    note: request.note,
                    status: request.status,
                    userName: request.userName,
                    statusIconClass: statusIconClass
                }
            };
        });

        // Créer et rendre le calendrier
        const calendar = new FullCalendar.Calendar(calendarElement, {
            initialView: 'dayGridMonth',
            locale: 'fr',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            buttonText: {
                today: "Aujourd'hui",
                month: 'Mois',
                week: 'Semaine',
                day: 'Jour'
            },
            events: events,
            eventContent: function(arg) {
                // Affiche l'icône Bootstrap + texte + nom dans la case du calendrier
                const statusIconClass = arg.event.extendedProps.statusIconClass;
                const userName = arg.event.extendedProps.userName || '';
                const container = document.createElement('div');
                const icon = document.createElement('i');
                icon.className = statusIconClass;
                icon.style.marginRight = '0.25em';
                container.appendChild(icon);
                const text = document.createElement('span');
                text.textContent = arg.event.title + ' (' + userName + ')';
                container.appendChild(text);
                return { domNodes: [container] };
            },
            eventClick: function(info) {
                const note = info.event.extendedProps.note;
                const status = info.event.extendedProps.status;
                // Utiliser aussi l'icône dans la popup
                let statusIconHtml = '';
                let statusText = '';
                if (status === 'approved') {
                    statusIconHtml = '<i class="bi bi-check-lg text-success"></i>';
                    statusText = 'Validée';
                } else if (status === 'rejected') {
                    statusIconHtml = '<i class="bi bi-x-lg text-danger"></i>';
                    statusText = 'Refusée';
                } else {
                    statusIconHtml = '<i class="bi bi-clock text-warning"></i>';
                    statusText = 'En attente';
                }
                // Affichage dans une modal ou alert (HTML possible dans une modal personnalisée)
                let message = `Demande : ${statusIconHtml} ${statusText}\nDate : ${info.event.start.toLocaleDateString('fr-FR')}`;
                if (note) {
                    message += `\n\nCommentaire : ${note}`;
                }
                // Pour une vraie modale, il faudrait l'intégrer dans le HTML, ici on garde alert pour la simplicité
                alert(message.replace(/<[^>]+>/g, ''));
            },
            height: 'auto'
        });

        calendar.render();
        
        // Stocker l'instance pour la mettre à jour plus tard
        window.fullCalendarInstance = calendar;
    };

    // Rafraîchir le calendrier après ajout d'une demande
    window.refreshFullCalendar = function() {
        if (window.fullCalendarInstance) {
            // Recharger tous les événements
            const currentUser = getCurrentUser();
            if (!currentUser) return;

            const requests = JSON.parse(localStorage.getItem('requests')) || [];
            const userRequests = requests.filter(r => r.userId === currentUser.id);

            const events = userRequests.map(request => {
                let backgroundColor, borderColor, textColor;
                
                if (request.status === 'approved') {
                    backgroundColor = '#28a745';
                    borderColor = '#28a745';
                    textColor = '#ffffff';
                } else if (request.status === 'rejected') {
                    backgroundColor = '#dc3545';
                    borderColor = '#dc3545';
                    textColor = '#ffffff';
                } else {
                    backgroundColor = '#ffc107';
                    borderColor = '#ffc107';
                    textColor = '#000000';
                }

                let statusIconHtml;
                if (request.status === 'approved') {
                    statusIconHtml = '<i class="bi bi-check-lg text-success"></i>';
                } else if (request.status === 'rejected') {
                    statusIconHtml = '<i class="bi bi-x-lg text-danger"></i>';
                } else {
                    statusIconHtml = '<i class="bi bi-clock text-warning"></i>';
                }
                return {
                    id: String(request.id),
                    title: `Présence ${statusIconHtml}`,
                    start: request.date,
                    allDay: true,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    textColor: textColor,
                    extendedProps: {
                        note: request.note,
                        status: request.status
                    }
                };
            });

            // Supprimer tous les événements existants et ajouter les nouveaux
            window.fullCalendarInstance.removeAllEvents();
            window.fullCalendarInstance.addEventSource(events);
        }
    };

    // Initialisation
    document.addEventListener('DOMContentLoaded', function() {
        setMinDate();
        loadUserRequests();
        
        // Initialiser FullCalendar
        if (document.getElementById('calendar')) {
            // Attendre que FullCalendar soit chargé
            if (typeof FullCalendar !== 'undefined') {
                initializeFullCalendar();
            } else {
                console.error('FullCalendar not loaded');
            }
        }

        // Attacher le gestionnaire au bouton de demande
        const requestBtn = document.querySelector('.btn-primary');
        if (requestBtn && document.getElementById('presenceDate')) {
            requestBtn.addEventListener('click', addPresenceRequest);
        }
    });
})();
