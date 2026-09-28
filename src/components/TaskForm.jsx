import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleAddTask(event) {
    event.preventDefault();

    if (task.trim() === "") return;

    onAddTask(task);
    setTask("");
  }

  return (
    <form className="task-form" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;