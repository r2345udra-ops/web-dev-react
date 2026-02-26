import './App.css'
import TaskCard from './components/TaskCard/TaskCard'
import { useState } from "react";

const name = "Andrey";

const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Task 1",
    dueDate: "Tomrrow",
    priority: "High",
    assignedTo: "Andrey",
    status: "Pending",
  },
   {
    id:2,
    title: "Study React",
    dueDate: "Tomrrow",
    priority: "High",
    assignedTo: "Andrey",
    status: "Pending",
  },
   {
    id: 3,
    title: "Task 3",
    dueDate: "Tomrrow",
    priority: "High",
    assignedTo: "Andrey",
    status: "Pending",
  },
];

function App() {

  return (
  <>
    <h1>Hello {name} below are your tasks:</h1>

    <TaskCard 
      title="Task 1" 
      dueDate="Tomorrow" 
      priority="High" 
      assignedTo="Andrey"
      status="Pending"
    />

    <TaskCard 
      title="Study React"
      dueDate="March 26"
      priority="Medium"
      assignedTo="Rudra"
      status="Pending"
    />

    <TaskCard 
      title="Prepare Presentation"
      dueDate="March 28"
      priority="High"
      assignedTo="Rudra"
      status="Done"
    />

    <TaskCard 
      title="Update GitHub"
      dueDate="March 29"
      priority="Low"
      assignedTo="Rudra"
      status="Pending"
    />

    <TaskCard 
      title="Practice Props"
      dueDate="March 30"
      priority="Medium"
      assignedTo="Rudra"
      status="Done"
    />    


    {
      tasks.map((task) => (
        <TaskCard
          {...task}
          key={task.title}
          // title={task.title}
          // dueDate={task.dueDate}
          // priority={task.priority}
          // assignedTo={task.assignedTo}
        />
      )

      )
    }
    

  </>
);


}

export default App;
