import React, { useState } from 'react';
import Header from './Components/Header'
import TaskList from './Components/TaskList'

export default function App()
{
    const [tasks,setTasks] = useState([
        {
            id: 1,
            name:"Study more",
            date: "Today",
            reminder: true
        },
        {
            id:2,
            name: "Study less",
            date: "Tomorrow",
            reminder: false
        }
    ])

    function DeleteTask(id)
    {
        setTasks(tasks.filter(task=>task.id!=id));
    }

    function ToggleReminder(id)
    {
        setTasks(tasks.map(task=>task.id===id?{...task,reminder:!task.reminder}:task))
    }

    return (
    <div className="container">
        <Header title="Task Tracker"/>
        <TaskList tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder}/>
    </div>
    )
}