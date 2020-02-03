let cena=45;
let novac=50;
if (cena>novac){
    console.log('Nemate dovoljno novca');
    console.log('Trenutno stanje '+cena);
} else {
    console.log('Uspesno ste kupili proizvod');
    console.log('Trenutno stanje '+(novac-cena));
}