import React from "react";
import TodoList from "./ToDoList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Simple To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
