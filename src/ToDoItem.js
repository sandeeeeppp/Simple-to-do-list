import React from "react";

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span className="todo-text" onClick={onToggle}>
        {task.text}
      </span>
      <button className="delete-btn" onClick={onDelete} title="Delete">
        &times;
      </button>
    </li>
  );
}

export default TodoItem;
