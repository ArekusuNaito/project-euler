import React, { useState } from 'react';
import Header from './components/Header'
import TaskList from './components/TaskList';
import './index.css';


export default function App()
{
    const [tasks,setTasks] = useState([
            {
                id: 1,
                name:"Study more",
                date: "Today",
                willRemind: true
            },
            {
                id:2,
                name: "Study less",
                date: "Tomorrow",
                willRemind: false
            }
        ]);
    function onDelete(id)
    {
        
        setTasks(tasks.filter(task=>task.id!==id));
    }

    function onToggle(id)
    {
        console.log(id);
        setTasks(tasks.map(task=>task.id===id?{...task,willRemind:!task.willRemind}:task))
    }
    return(
        <div className="container">
            <Header title="Task Tracker"/>
            <TaskList data={tasks} onDelete={onDelete} onToggle={onToggle}/>
        </div>
    )
}
