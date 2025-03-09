import { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearEdit = () => setTaskToEdit(null);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} />
    </div>
  );
};

export default App;
