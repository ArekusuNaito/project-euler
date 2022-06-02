import React from 'react';



export default function Header(props)
{
    return(
        <header>
            <h3>{props.title}</h3>
            <button>Add</button>
        </header>
    )
}