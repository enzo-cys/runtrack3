// Fonction qui extrait la valeur d'une clé depuis une chaîne JSON
// Paramètre 1 : jsonString - une chaîne de caractères au format JSON
// Paramètre 2 : key - la clé dont on veut récupérer la valeur
function jsonValueKey(jsonString, key) {
    
    // Convertir la chaîne JSON en objet JavaScript
    // JSON.parse() transforme le texte JSON en objet manipulable
    const jsonObject = JSON.parse(jsonString);
    
    // Retourner la valeur correspondant à la clé demandée
    // On utilise la notation par crochets pour accéder à la propriété
    return jsonObject[key];
}

// Exemple d'utilisation de la fonction
// Créer une chaîne JSON avec des informations sur La Plateforme_
const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Appeler la fonction avec la clé "city" et le reste
const city = jsonValueKey(jsonString, 'city');
const name = jsonValueKey(jsonString, 'name');
const address = jsonValueKey(jsonString, 'address');
const nb_staff = jsonValueKey(jsonString, 'nb_staff');
const creation = jsonValueKey(jsonString, 'creation');

console.log(city);
console.log(name);
console.log(address);
console.log(nb_staff);
console.log(creation);
