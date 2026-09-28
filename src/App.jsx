import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;

    return true;
  });

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="app">
      <main className="dashboard">
        <header className="header">
          <h1>Task Dashboard</h1>
          <p>Organize your work and stay productive.</p>
        </header>

        <TaskForm onAddTask={addTask} />

        <div className="stats">
          <div className="stat-card">
            <p>Total Tasks</p>
            <h2>{totalTasks}</h2>
          </div>

          <div className="stat-card">
            <p>Active</p>
            <h2>{activeTasks}</h2>
          </div>

          <div className="stat-card">
            <p>Completed</p>
            <h2>{completedTasks}</h2>
          </div>
        </div>

      <div className="filters">
  <button
    className={filter === "all" ? "active-filter" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={filter === "active" ? "active-filter" : ""}
    onClick={() => setFilter("active")}
  >
    Active
  </button>

  <button
    className={filter === "completed" ? "active-filter" : ""}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>

        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      </main>
    </div>
  );
}

export default App;