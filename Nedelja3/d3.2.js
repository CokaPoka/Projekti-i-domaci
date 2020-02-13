function lifeSupply(numPerMonth, age){
    return (100-age)*12*numPerMonth;
}

lifeSupply(10, 26) 
console.log(lifeSupply(10, 26))