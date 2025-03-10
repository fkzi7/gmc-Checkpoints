
import React from "react";
import AddTask from "./components/addTask";
import ListTask from "./components/listTask";

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
