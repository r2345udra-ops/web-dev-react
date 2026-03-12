import './App.css'
import TaskCard from './components/TaskCard/TaskCard'
import { useState, useEffect } from 'react';
import './components/TaskCard/TaskCard.css'

const name = "Andrey";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
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
        title: "Task 2",
        dueDate: "Tomorrow",
        priority: "High",
        assignedTo: "Andrey",
        status: "Pending",
      },
      {
        id: 3,
        title: "Task 3",
        dueDate: "Tomorrow",
        priority: "High",
        assignedTo: "Andrey",
        status: "Pending",
      },
    ];
  });

  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    priority: "High",
    assignedTo: "Andrey",
    status: "Pending",
  });

  const [filter, setFilter] = useState(() => {
    return localStorage.getItem("filter") || "all";
  });

  const [lastModified, setLastModified] = useState(() => {
    return localStorage.getItem("lastModified") || "Not updated yet";
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const updatedTime = new Date().toLocaleTimeString();
    setLastModified(updatedTime);
    localStorage.setItem("lastModified", updatedTime);
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function addTask() {
    if (formData.title.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: formData.title,
      dueDate: formData.dueDate,
      priority: formData.priority,
      assignedTo: formData.assignedTo,
      status: formData.status,
    };

    setTasks([...tasks, newTask]);

    setFormData({
      title: "",
      dueDate: "",
      priority: "High",
      assignedTo: "Andrey",
      status: "Pending",
    });
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearAllTasks() {
    setTasks([]);
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") {
      return task.status === "Pending";
    }

    if (filter === "done") {
      return task.status === "Done";
    }

    return true;
  });

  return (
    <div className={`app-container ${theme}`}>
      <h1>Hello {name} below are your tasks:</h1>

      <p className="last-updated">Last updated: {lastModified}</p>

      <div className="top-controls">
        <button type="button" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <button type="button" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      </div>

      <div className="filter-buttons">
        <button
          type="button"
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          type="button"
          className={filter === "pending" ? "active-filter" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>

        <button
          type="button"
          className={filter === "done" ? "active-filter" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}>
        <div>
          <label>Task name:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
          {formData.title.trim() === "" && (
            <p className="validation">Title required</p>
          )}
        </div>

        <div>
          <label>Due date:</label>
          <input
            type="text"
            name="dueDate"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Priority:</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label>Assigned To:</label>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button type="submit">Add</button>
      </form>

      <div className="tasks-container">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              {...task}
              key={task.id}
              onDeleteTask={() => deleteTask(task.id)}
            />
          ))
        ) : (
          <p className="empty-message">No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default App;