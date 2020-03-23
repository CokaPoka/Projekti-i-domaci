import React from 'react';
import { dodajZaposlenog, sviZaposleni } from '../services/service';



export const Forma = () =>{
    
    return (
        <div className="form">
            <input type="text" placeholder="ime i prezime" className="name"></input>
            <input type="number" placeholder="unesi iznos plate" className="salary"></input>
            <input type="number" placeholder="unesi godine" className="age"></input>
            <button onClick={() => {
                let name = document.querySelector('.name').value
                let salary = document.querySelector('.salary').value
                let age = document.querySelector('.age').value
                if (name.trim() === '' || salary.trim() === '' || age.trim() === '') {
                    alert('ne moze prazno');
                    return
                }
                
                
                dodajZaposlenog(name, salary, age)
                    .then(({data}) => {
                        sviZaposleni(data.name,data.salary,data.age);
                    })
             console.log(name, salary, age)
            }}>posalji</button>
        </div>
    )
}