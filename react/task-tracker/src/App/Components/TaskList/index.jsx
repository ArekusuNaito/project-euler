import React from 'react';
import Task from '../Task';

export default function TaskList({tasks,onDelete,onToggle})
{
    const children = tasks.map((task,index)=><Task key={index} onDelete={onDelete} data={{id:index,...task}} onToggle={onToggle}/>)
    return (
        <div>
            {children}
        </div>
    )
}