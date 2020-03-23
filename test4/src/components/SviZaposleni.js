import React from 'react';
import { sviZaposleni } from '../services/service';
import { useState } from 'react';
import { useEffect } from 'react';
import { Radnik } from './Radnik'
import { Forma } from './Forma'


export const SviZaposleni = () => {
    const [zaposleni, setZaposleni] = useState([])
    const [select, setSelect] = useState(100);
    

   
  

    useEffect(() => {
        sviZaposleni().then((res) => setZaposleni(res.data.data))
    }, [])

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    return (
        <>
            <div className='select-container'>
                <select onChange={(e) => handleSelect(e)}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>100</option>
                </select>
            </div>
            <div className='emloyee-list'>
            {zaposleni.slice(0,select).map(radnik => <Radnik key={radnik.id} radnik={radnik} />)}
                <Forma />
            </div>
            
        </>
    )
}