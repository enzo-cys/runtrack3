function isPremier(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function sommenombrespremiers(a, b) {
    if (isPremier(a) && isPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}
console.log(sommenombrespremiers(3, 5)); // 8
console.log(sommenombrespremiers(4, 5)); // false
console.log(sommenombrespremiers(7, 11)); // 18
console.log(sommenombrespremiers(8, 10)); // false