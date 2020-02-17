let app = document.querySelector('#app');

let counter = document.querySelector('#counter1');
let count = 0;
let btnOrder = document.querySelector('#btnOrder1');
btnOrder.addEventListener('click', () => {
    count++;
    counter.innerHTML =  count;
})

let submit = document.querySelector ('#pSubmit1');
let btnSubmit = document.querySelector('#btnSubmit1');
btnSubmit.addEventListener('click', () => {
    if (count == 0) {
        submit.innerHTML = `You didn't order`;
    } else {
        let time = new Date();
        submit.innerHTML = `You ordered ${count} pizza <br> at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} <br>
        on ${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}.` 
        count = 0;

    }
})


let counter2 = document.querySelector('#counter2');
let count2 = 0;
let btnOrder2 = document.querySelector('#btnOrder2');
btnOrder2.addEventListener('click', () => {
    count2++;
    counter2.innerHTML = count2;
})

let submit2 = document.querySelector('#pSubmit2');
let btnSubmit2 = document.querySelector('#btnSubmit2');
btnSubmit2.addEventListener('click', () => {
    if (count2 == 0) {
        submit2.innerHTML = `You didn't order`;
    } else {
        let time = new Date();
        submit2.innerHTML = `You ordered ${count2} pizza <br> at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} <br>
        on ${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}.`
        count2 = 0;

    }
})