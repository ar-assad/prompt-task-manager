// components/Task.js
import React from "react";
import "../styles/Task.css";

const Task = ({ description, dueDate, completed, onToggleComplete }) => {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <div className="task-info">
        <p className="task-description">{description}</p>
        <p className="task-due-date">Due Date: {dueDate}</p>
      </div>
      <div className="task-actions">
        <input
          type="checkbox"
          id={`complete-${description}`}
          checked={completed}
          onChange={onToggleComplete}
        />
        <label htmlFor={`complete-${description}`}>Complete</label>
      </div>
    </div>
  );
};

export default Task;
