import React from 'react';
import {FaTimes} from 'react-icons/fa';

export default function Task({data,onDelete,onToggle})
{
    const redStyle = {
        color: "red"
    }
    const classList = data.willRemind?"task reminder":"task";
    return(
        <div className={classList} onDoubleClick={()=>onToggle(data.id)}>
            <div>
                <h3>{data.name}</h3>
                <FaTimes style={redStyle} />
            </div>
            <p>{data.date}</p>
        </div>
    )
}