// App.js
import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <TaskList />
    </div>
  );
};

export default App;
