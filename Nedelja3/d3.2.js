function lifeSupply(numPerMonth, age) {
    if (age < 100) {
        pizzaNum = (100 - age) * 12 * numPerMonth;
        return `Dovoljno je ${pizzaNum} pica`;

    } else {
        return `Nije zdravo jesti picu posle 100. godine. :D`;
    }
}
console.log(lifeSupply(10, 30));