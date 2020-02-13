function getCenaCm(r, cena) {
    return cena / (r ** 2 * Math.PI);

}

console.log(`${getCenaCm(20, 1000)}`);