//import './TaskCard.css'

// function TaskCard(props) {
//     return (<div>
//         <h3 className={props.priority === "High" ? "prio-text" : ""}>{props.title}</h3>
//         <p>Due: {props.dueDate}</p>
//         <p>Priority: {props.priority}</p>
//         <p>Assigned to: {props.assignedTo}</p>
//         <p>Status: {props.status}</p>
//     </div>);
// }



//Alternative syntax to read props:

function TaskCard({title, dueDate, priority, onDeleteTask}) {
    return (<div className="task-item">
        <h3>{title}</h3>
        <span className={`task-priority ${priority.toLowerCase()}`}>{priority}</span>
        {dueDate && <p>Due Date: {dueDate}</p>}
        <p></p>
        <button onClick={onDeleteTask}>Delete</button>
    </div>);
}



//Alternative syntax to read props:

function TaskCard({ title, dueDate, priority, assignedTo, status, onDeleteTask }) {
  return (
    <div className={`task-item ${status === "Done" ? "task-completed" : ""}`}>
      <h3>{title}</h3>
      <span className={`task-priority ${priority.toLowerCase()}`}>{priority}</span>
      {dueDate && <p>Due Date: {dueDate}</p>}
      <p>Assigned To: {assignedTo}</p>
      <p className={status === "Done" ? "status-done" : "status-pending"}>
        Status: {status}
      </p>
      <button onClick={onDeleteTask}>Delete</button>
    </div>
  );
}

export default TaskCard;