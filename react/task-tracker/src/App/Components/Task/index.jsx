import React from 'react';
import {FaTimes} from 'react-icons/fa';

export default function Task({data,onDelete,onToggle})
{
    const deleteTaskStyle =
    {
        color: "red"
    }
    const classList = "task "+(data.reminder?"reminder":"");
    return(
        <div className={classList} onDoubleClick={()=>onToggle(data.id)}>
            <h3>{data.name}<FaTimes style={deleteTaskStyle} onClick={()=>onDelete(data.id)}/></h3>
            <p>{data.date}</p>
        </div>
    )
}