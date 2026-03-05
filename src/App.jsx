import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";
import { useState } from "react";

const name = "Andrey";

function App() {
  // Week 2 Part 1: tasks in state + id added
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      dueDate: "Tomorrow",
      priority: "High",
      assignedTo: "Andrey",
      status: "Pending",
    },
    {
      id: 2,
      title: "Study React",
      dueDate: "March 26",
      priority: "Medium",
      assignedTo: "Rudra",
      status: "Pending",
    },
    {
      id: 3,
      title: "Prepare Presentation",
      dueDate: "March 28",
      priority: "High",
      assignedTo: "Rudra",
      status: "Done",
    },
    {
      id: 4,
      title: "Update GitHub",
      dueDate: "March 29",
      priority: "Low",
      assignedTo: "Rudra",
      status: "Pending",
    },
    {
      id: 5,
      title: "Practice Props",
      dueDate: "March 30",
      priority: "Medium",
      assignedTo: "Rudra",
      status: "Done",
    },
  ]);

  // Week 2 Part 2: Add New Task
  const addNewTask = () => {
    const newTask = {
      id: Date.now(),
      title: "New Task",
      dueDate: "TBD",
      priority: "Low",
      assignedTo: name,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);
  };

  // Week 2 Part 4 (Optional): Remove Last Task
  const removeLastTask = () => {
     setTasks(tasks.slice(0, -1));
  };

  return (
    <>
      <h1>Hello {name} below are your tasks:</h1>

      {/* Week 2 Part 3: Counter */}
      <h2>Total Tasks: {tasks.length}</h2>

      {/* Week 2 Part 2: Button */}
      <button onClick={addNewTask}>Add New Task</button>

      {/* Week 2 Part 4 Optional */}
      <button onClick={removeLastTask} disabled={tasks.length === 0}>
        Remove Last Task
      </button>

      {/* Week 2 Part 1: Render with map */}
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "12px" }}>
          <TaskCard {...task} />

          {/* Week 2 Part 1: Show ID */}
          <button onClick={() => console.log(task.id)}>Show ID</button>
        </div>
      ))}
    </>
  );
}

export default App;