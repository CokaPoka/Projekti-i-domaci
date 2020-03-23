import React from 'react';


export const Radnik = ({radnik}) => {
  
    return(
        <>
            <p>{radnik.employee_name}</p>
            <p>{radnik.employee_salary}</p>
            <p>{radnik.employee_age}</p>
            <hr></hr>
        </>
    )
}