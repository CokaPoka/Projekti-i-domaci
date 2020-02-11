let br1 = 10;
let br2 = 7;
let br3 = 15;
function broj(br1,br2,br3) {
    if (br1 > br2 && br1 > br3) {
        return `${br1}`;
    } else if (br2 > br3 && br2 > br1) {
        return `${br2}`;
    } else if (br3 > br1 && br3 > br2) {
        return `${br3}`

    } 
    
}
let najveciBroj = broj(br1,br2,br3);
console.log(`${najveciBroj}`);

 

