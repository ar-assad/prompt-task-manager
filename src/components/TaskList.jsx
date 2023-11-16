// components/TaskList.js
import React, { useState } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import "../styles/TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
    setIsFormVisible(false);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          description={task.description}
          dueDate={task.dueDate}
          completed={task.completed}
          onToggleComplete={() => handleToggleComplete(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
      <button
        className="add-task-button"
        onClick={() => setIsFormVisible(true)}
      >
        +
      </button>
      {isFormVisible && (
        <AddTaskForm
          onClose={() => setIsFormVisible(false)}
          onFormSubmit={handleAddTask}
        />
      )}
    </div>
  );
};

export default TaskList;
