let pikacu = {
    ime: 'pikacu',
    vrsta: 'elektricni',
    sposobnosti: ['staticki elektricitet', 'skupljac', 'leti'],
    karakteristike: { napad: 55, odbrana: 30, brzina: 90 },
    

}

let manki = {
    ime: 'manki',
    vrsta: 'borbeni',
    sposobnosti: ['skace', 'brz', 'jak'],
    karakteristike: { napad: 45, odbrana: 50, brzina: 110 },
   

}

let mjau = {
    ime: 'mjau',
    vrsta: 'normalni',
    sposobnosti: ['prede', 'grebe', 'skace'],
    karakteristike: { napad: 40, odbrana: 25, brzina: 80 },
    
}

let glum = {
    ime: 'glum',
    vrsta: 'travnati',
    sposobnosti: ['trci', 'skupljac'],
    karakteristike: { napad: 45, odbrana: 28, brzina: 85 },
}

let sviPokemoni = [pikacu, manki, mjau, glum];

function getSposobnosti(arr) {
    let nizSposobnosti = [];
    for (let index = 0; index < arr.length; index++) {
        nizSposobnosti.push(arr[index].sposobnosti);

    }

    return `Sposobnosti pokemona su: ${nizSposobnosti}`;
}
console.log(getSposobnosti(sviPokemoni));

sviPokemoni.sort((a, b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina;
})

console.log(sviPokemoni);

const getWinner = (arr) => {
    let maxPos = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index].karakteristike.napad;
        if (element > arr[maxPos].karakteristike.napad) {
            maxPos = index;
        }

    }
    return arr[maxPos];

}
var pobednik = getWinner(sviPokemoni);
console.log(`Pobenik je: ${pobednik.ime}`);
 


const btn_prikaz = document.querySelector('#prikaz');
const btn_pobednik = document.querySelector('#pobednik');
const app = document.querySelector('#app');




function ispisiOpis(pokemon) {
    return `Ime: ${pokemon.ime} <br>
        Vrsta: ${pokemon.vrsta} <br>
        Sposobnosti: ${pokemon.sposobnosti}<br>
        Karakteristike: napad: ${ pokemon.karakteristike.napad}, odbrana: ${pokemon.karakteristike.odbrana}, brzina: ${pokemon.karakteristike.brzina }
    `;
}



btn_prikaz.addEventListener('click', ()=>{
    app.innerHTML='';
    for (let i = 0; i < sviPokemoni.length; i++) {
        let div = document.createElement('div');
        div.className = 'pokemon';
        let p = document.createElement('p');
        p.innerHTML = ispisiOpis(sviPokemoni[i]);
        let img = document.createElement('img');
        img.src = `img/${sviPokemoni[i].ime}.png`;
        div.appendChild(p);
        div.appendChild(img);
        app.appendChild(div);
    }
  
});


btn_pobednik.addEventListener('click', ()=>{
        app.innerHTML='';
        let div = document.createElement('div');
        div.className = 'pokemon';
        let p = document.createElement('p');
        p.innerHTML = ispisiOpis(pobednik);
        let img = document.createElement('img');
        img.src = `img/${pobednik.ime}.png`;
        div.appendChild(p);
        div.appendChild(img);
        app.appendChild(div);    

    }
);





