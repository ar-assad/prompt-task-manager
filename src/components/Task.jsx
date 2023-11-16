// components/Task.js
import React from "react";
import "../styles/Task.css";

const Task = ({ description, dueDate, completed, onToggleComplete, onDelete }) => {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <div className="task-info">
        <input
          type="checkbox"
          id={`complete-${description}`}
          checked={completed}
          onChange={onToggleComplete}
          className="task-checkbox"
        />
        <label htmlFor={`complete-${description}`}></label>
        <div>
          <p className="task-description">{description}</p>
          <p className="task-due-date">Due Date: {dueDate}</p>
        </div>
      </div>
      <div className="task-actions">
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
