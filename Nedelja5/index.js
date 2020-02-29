const select = document.querySelector('#zarada');
const opis = document.querySelector('#opis');
const iznos = document.querySelector('#iznos');
const btnPotvrda = document.querySelector('#btn-confirm');
const listItemRashodi = document.querySelector('.list-item-rashodi')
const listItemPrihodi = document.querySelector('.list-item-prihodi');
const budzet = document.querySelector('.budzet');
const ukupanPrihod = document.querySelector('.ukupan-prihod');
const ukupanRashod = document.querySelector('.ukupan-rashod');

let currDesc = '';
let currAmount= '';
let tasksPrihodi = [];
let tasksRashodi = [];
let counter = 0;


opis.addEventListener('input', (e) => {
    currDesc = e.target.value;
})

iznos.addEventListener('input', (e) => {
    currAmount = e.target.value;
    console.log(currAmount);
    
})

btnPotvrda.addEventListener('click', (e) => {
    e.preventDefault();
    if (currDesc.trim() == '') {
        alert('Ne moze prazan string')
        currDesc = '';
        opis.value = '';
        return;
    } else if (currAmount <= 0) {
        alert('Pogresan unos!');
        currAmount = '';
        iznos.value = '';
        return
    } else if (select.value == 'Rashodi') {
        let taskRashodi = {
            id: 'task-' + counter,
            desc: currDesc.trim(),
            amount: currAmount,
        }
        counter++;
        tasksRashodi.push(taskRashodi);
        addRashodiHTML(taskRashodi);
        opis.value = '';
        iznos.value = '';
        currDesc = '';
        currAmount = '';
    } else {
        var taskPrihodi = {
            id: 'task-' + counter,
            desc: currDesc.trim(),
            amount: currAmount,
        }
        counter++;
        tasksPrihodi.push(taskPrihodi);
        addPrihodiHTML(taskPrihodi);
        opis.value = '';
        iznos.value = '';
        currDesc = '';
        currAmount = '';
    }
 
    var s = sumPrihodi(tasksPrihodi);

    console.log(s);
    
    addUkupanPrihodHTML(s);

    var sRashod = sumRashodi(tasksRashodi);
    addUkupanRashodHTML(sRashod);

    var ostatak = ukupanOstatak(s,sRashod)
    addOstatakHtml(ostatak); 

    
});


var sumPrihodi = (tasks) => {
    let sum = 0;
    tasks.forEach(element => {
        sum += parseInt(element.amount, 10)

    });
    return sum
}

let sumRashodi = (tasks) => {
    let sum = 0;

    tasks.forEach(element => {
        sum += parseInt(element.amount, 10);
        

    });
    return sum
}

let ukupanOstatak=(a,b)=>{
    return a-b;
}
const removeElementPrihodi = (element) => {
    tasksPrihodi.splice(tasksPrihodi.findIndex(function (i) {
        return i.id === element.id;
    }), 1);
};

const removeElementRashodi = (element) => {
    tasksRashodi.splice(tasksRashodi.findIndex(function (i) {
        return i.id === element.id;
    }), 1);
};
       

const addPrihodiHTML = (taskPrihodi) => {
    let listItem = document.createElement('div');
    let listItemRight = document.createElement('div');
    let taskDesc = document.createElement('p');
    let taskAmount = document.createElement('p');
    let btnDelete = document.createElement('button');

    listItem.className = 'list-item';
    listItemRight.className = 'list-item-right';

    taskDesc.innerText = taskPrihodi.desc;
    taskAmount.innerText = `+ ${taskPrihodi.amount}`;

    listItem.appendChild(taskDesc);
    listItemRight.appendChild(taskAmount);

    btnDelete.innerText = '❌';
    btnDelete.addEventListener('click', (e) => {
        listItem.remove();
        listItemRight.remove();
        
        s = sumPrihodi(tasksPrihodi)-taskPrihodi.amount;

        removeElementPrihodi(taskPrihodi);

        addUkupanPrihodHTML(s);

        ostatak = s - sumRashodi(tasksRashodi);
        addOstatakHtml(ostatak);

    });
    listItemRight.appendChild(btnDelete);
    listItemPrihodi.appendChild(listItem);
    listItemPrihodi.appendChild(listItemRight);
}

const addRashodiHTML = (taskRashodi) => {
    let listItem2 = document.createElement('div');
    let listItem2Right = document.createElement('div');
    let procentiRashoda = document.createElement('p');
    let taskDesc2 = document.createElement('p');
    let taskAmount2 = document.createElement('p');
    let btnDelete2 = document.createElement('button');

    listItem2.className = 'list-item2';
    listItem2Right.className = 'list-item2-right';

    taskDesc2.innerText = taskRashodi.desc;
    taskAmount2.innerText = `- ${taskRashodi.amount}`;
    // procentiRashoda.innerText = `${procenti}%`;

    listItem2.appendChild(taskDesc2);
    listItem2Right.appendChild(taskAmount2);
    listItem2Right.appendChild(procentiRashoda);


    btnDelete2.innerText = '❌';
    btnDelete2.addEventListener('click', (e) => {
        listItem2.remove();
        listItem2Right.remove();

        sRashod = sumRashodi(tasksRashodi) - taskRashodi.amount;

        removeElementRashodi(taskRashodi);

        addUkupanRashodHTML(sRashod);

        ostatak = sumPrihodi(tasksPrihodi) - sRashod;
        addOstatakHtml(ostatak);

    });
    listItem2Right.appendChild(btnDelete2);
    listItemRashodi.appendChild(listItem2);
    listItemRashodi.appendChild(listItem2Right);

}

const addUkupanPrihodHTML = (s) => {
    ukupanPrihod.innerHTML = '';
    let addPrihod = document.createElement('p');
    addPrihod.className = 'ukupan-prihod-item'
    addPrihod.innerText = `+${s}`
    ukupanPrihod.appendChild(addPrihod);

}

const addUkupanRashodHTML = (sRashod) => {
    ukupanRashod.innerHTML = '';
    let addRashod = document.createElement('p');
    addRashod.className = 'ukupan-rashod-item'
    addRashod.innerText = `-${sRashod}`
    ukupanRashod.appendChild(addRashod);

}

const addOstatakHtml = (ostatak) => {
    budzet.innerHTML = '';
    let addOstatak = document.createElement('p');
    addOstatak.className = 'ostatak-item';
    addOstatak.innerText = `+${ostatak}`;
    budzet.appendChild(addOstatak);
}

