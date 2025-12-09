// Ce code permet a l'utilisateur de pouvoir appuyer sur des bouton différents :
// changement du header du site
// changer la liste des éléments affichés
// rénitialiser les couleurs et/ la liste au chargement de la page(2 bouton différents)
// que quand on appuie sur cheatcode (code konami) le site lance une alerte vous ne devez pas tricher puis affiche une page error 404

// Liste de 100 éléments aléatoires (fruits, légumes, jeux vidéo, fast food)
const randomItems = [
    // Fruits
    'Pomme', 'Banane', 'Orange', 'Fraise', 'Kiwi', 'Mangue', 'Ananas', 'Poire', 'Pêche', 'Cerise',
    'Raisin', 'Melon', 'Pastèque', 'Citron', 'Pamplemousse', 'Abricot', 'Prune', 'Framboise', 'Myrtille', 'Grenade',
    // Légumes
    'Carotte', 'Tomate', 'Poivron', 'Concombre', 'Salade', 'Brocoli', 'Chou-fleur', 'Courgette', 'Aubergine', 'Oignon',
    'Ail', 'Pomme de terre', 'Patate douce', 'Épinard', 'Haricot', 'Petit pois', 'Maïs', 'Champignon', 'Radis', 'Navet',
    // Jeux vidéo
    'Mario', 'Zelda', 'Pokemon', 'Minecraft', 'Fortnite', 'GTA', 'FIFA', 'Call of Duty', 'Sonic', 'Pac-Man',
    'Tetris', 'Street Fighter', 'Mortal Kombat', 'Resident Evil', 'Final Fantasy', 'Dark Souls', 'Skyrim', 'Halo', 'Overwatch', 'League of Legends',
    'Dota', 'Counter-Strike', 'Valorant', 'Apex Legends', 'Rocket League', 'Among Us', 'Fall Guys', 'Sims', 'Animal Crossing', 'Stardew Valley',
    // Fast Food
    'Burger', 'Pizza', 'Hot Dog', 'Tacos', 'Kebab', 'Frites', 'Nuggets', 'Sandwich', 'Burrito', 'Wrap',
    'Chicken Wings', 'Onion Rings', 'Fish and Chips', 'Panini', 'Croque-monsieur', 'Bagel', 'Donut', 'Muffin', 'Cookie', 'Brownie',
    'Cheesecake', 'Tiramisu', 'Croissant', 'Pain au chocolat', 'Churros', 'Nachos', 'Quesadilla', 'Milkshake', 'Smoothie', 'Coca-Cola'
];

// Couleurs autorisées
const allowedColors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];

// Le code Konami : tapez "cheatcode"
const konamiCode = ['c', 'h', 'e', 'a', 't', 'c', 'o', 'd', 'e'];
let userInput = [];

// Détection du code Konami
window.addEventListener('keydown', (e) => {
    userInput.push(e.key.toLowerCase());
    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }
    if (userInput.join('') === konamiCode.join('')) {
        alert("Vous ne devez pas tricher !");
        window.location.href = "404.html";
    }
});

// Variables pour stocker l'état initial
let initialBgColor = 'white';
let initialHeaderColor = 'black';
let initialItems = ['Pomme', 'Carotte', 'Mario'];

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Bouton pour changer la couleur du header
    const changeHeaderBtn = document.getElementById('changeHeaderBtn');
    if (changeHeaderBtn) {
        changeHeaderBtn.addEventListener('click', () => {
            const h1 = document.querySelector('h1');
            const randomColor = allowedColors[Math.floor(Math.random() * allowedColors.length)];
            h1.style.color = randomColor;
        });
    }

    // Bouton pour ajouter un élément aléatoire à la liste
    const addItemBtn = document.getElementById('addItemBtn');
    if (addItemBtn) {
        addItemBtn.addEventListener('click', () => {
            const itemList = document.getElementById('itemList');
            const randomItem = randomItems[Math.floor(Math.random() * randomItems.length)];
            const newItem = document.createElement('li');
            newItem.textContent = randomItem;
            itemList.appendChild(newItem);
        });
    }

    // Bouton pour supprimer un élément de la liste
    const removeItemBtn = document.getElementById('removeItemBtn');
    if (removeItemBtn) {
        removeItemBtn.addEventListener('click', () => {
            const itemList = document.getElementById('itemList');
            if (itemList.children.length > 0) {
                itemList.removeChild(itemList.lastChild);
            }
        });
    }

    // Bouton pour réinitialiser tout
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Réinitialiser le body
            document.body.style.backgroundColor = initialBgColor;
            
            // Réinitialiser le header
            const h1 = document.querySelector('h1');
            h1.style.color = initialHeaderColor;
            
            // Réinitialiser la liste
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = '';
            initialItems.forEach(item => {
                const newItem = document.createElement('li');
                newItem.textContent = item;
                itemList.appendChild(newItem);
            });
        });
    }

    // Changement de couleur au scroll (uniquement couleurs autorisées)
    let lastScrollColor = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        // Changer de couleur tous les 20% de scroll
        const colorIndex = Math.floor(scrollPercent * allowedColors.length);
        if (colorIndex !== lastScrollColor && colorIndex < allowedColors.length) {
            lastScrollColor = colorIndex;
            document.body.style.backgroundColor = allowedColors[colorIndex];
        }
    });
});
