function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if (tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-item" key={task.id}>
          <span
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
              color: task.completed ? "#9ca3af" : "#1f2937",
            }}
          >
            {task.text}
          </span>

          <div className="task-actions">
            <button
              className="complete-button"
              onClick={() => onToggleTask(task.id)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;