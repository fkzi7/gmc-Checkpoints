import { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDescription.trim()) {
      alert("Please fill out both fields.");
      return;
    }

    if (taskToEdit) {
      editTask({ ...taskToEdit, name: taskName, description: taskDescription });
    } else {
      addTask({ id: Date.now(), name: taskName, description: taskDescription, completed: false });
    }
    
    setTaskName("");
    setTaskDescription("");
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
      {taskToEdit && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
