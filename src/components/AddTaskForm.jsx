// components/AddTaskForm.js
import React, { useState } from "react";
import "../styles/AddTaskForm.css";

const AddTaskForm = ({ onClose, onFormSubmit }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    // Check if dueDate is empty, and set it to the current date if it is
    const currentDate = new Date().toISOString().split('T')[0];
    const finalDueDate = dueDate.trim() === "" ? currentDate : dueDate;

    onFormSubmit({
      description: taskDescription,
      dueDate: finalDueDate
    });

    setTaskDescription("");
    setDueDate("");

    onClose();
  };

  const handleClose = () => {
    setTaskDescription("");
    setDueDate("");

    onClose();
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="add-task-form">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <h2>Add New Task</h2>
        <label htmlFor="taskDescription">Task Description:</label>
        <input
          type="text"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTaskForm;
