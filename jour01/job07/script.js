function jourtravaille(date) {
    const joursFeries = [
        '2020-01-01', // Jour de l'An
        '2020-04-13', // Lundi de Pâques
        '2020-05-01', // Fête du Travail
        '2020-05-08', // Victoire 1945
        '2020-05-21', // Ascension
        '2020-06-01', // Lundi de Pentecôte
        '2020-07-14', // Fête Nationale
        '2020-08-15', // Assomption
        '2020-11-01', // Toussaint
        '2020-11-11', // Armistice 1918
        '2020-12-25'  // Noël
    ];

    const dateString = date.toISOString().split('T')[0]; // Format YYYY-MM-DD .split('T')[0]; pour ne garder que la date
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();
    const dayOfWeek = date.getDay();

    if (joursFeries.includes(dateString)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}
const dateToCheck = new Date('2020-05-01');
jourtravaille(dateToCheck);
const anotherDateToCheck = new Date('2020-05-04');
jourtravaille(anotherDateToCheck);
const weekendDateToCheck = new Date('2020-05-02');
jourtravaille(weekendDateToCheck);