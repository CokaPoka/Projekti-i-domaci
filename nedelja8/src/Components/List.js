import React from 'react';

const List = (props) => (

    <div>
        {
            props.todos.map((item, index) => <p key={index}>{item}</p>)
        }
    </div>
   
    
);

export default List;