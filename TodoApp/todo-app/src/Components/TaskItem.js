import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => toggleComplete(task.id)}>
          <FaCheckCircle />
        </button>
        <button onClick={() => setTaskToEdit(task)}>
          <FaEdit />
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
