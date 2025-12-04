function tri(numbers, order) {
    // Fonction de comparaison pour l'ordre ascendant
    function compareAsc(a, b) {
        return a - b;
    }
    // Fonction de comparaison pour l'ordre descendant
    function compareDesc(a, b) {
        return b - a;
    }
    if (order === "asc") {
        numbers.sort(compareAsc);
    } else if (order === "desc") {
        numbers.sort(compareDesc);
    }
    return numbers;
}
console.log(tri([5, 2, 9, 1, 5, 6], "asc")); // [1, 2, 5, 5, 6, 9]
console.log(tri([5, 2, 9, 1, 5, 6], "desc")); // [9, 6, 5, 5, 2, 1]