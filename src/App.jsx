import './App.css'
import TaskCard from './components/TaskCard/TaskCard'

const name = "Andrey";



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

  </>
);


}

export default App;
