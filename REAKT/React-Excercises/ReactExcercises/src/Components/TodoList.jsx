import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 3,
      title: "Learn Vue",
      completed: false,
    },
  ]);
  const [text, SetText] = useState("");
  function addTodo(Text) {
    const newTodo = { id:Date.now(), title: Text, completed: false };

    setTodos([...todos, newTodo]);
    SetText("");
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }
  return (
    <div className="todo-list">
      <input
        type="text"
        value={text}
        onChange={(e) => SetText(e.currentTarget.value)}
      />
      <button onClick={() => addTodo(text)}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
