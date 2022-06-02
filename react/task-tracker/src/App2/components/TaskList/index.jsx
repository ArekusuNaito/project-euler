import React from 'react';
import Task from '../Task'

export default function TaskList({data,onDelete,onToggle})
{
    const children = data.map(task=>
        <Task key={task.id} onDelete={onDelete} onToggle={onToggle} data={task} />
    )
    return(
        <div >
            {children}
        </div>
    )
}
