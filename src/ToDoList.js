import React, { useState } from "react";
import TodoItem from "./ToDoItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text: input, completed: false }
    ]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-list-container">
      <form onSubmit={handleAddTask} className="todo-input-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
      <ul className="todo-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={() => toggleComplete(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
