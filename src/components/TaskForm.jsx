import React, { useState } from 'react';
import './TaskForm.css';
const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    addTask(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
