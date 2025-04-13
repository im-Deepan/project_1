import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, modifyTask }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => deleteTask(task.id), 300);
  };

  const handleModify = () => {
    if (isEditing) {
      modifyTask(task.id, newName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={isRemoving ? 'fade-out' : ''}>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <span>{task.name}</span>
      )}
      <div>
        <button className="modify-button" onClick={handleModify}>
          {isEditing ? 'Save' : 'Modify'}
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
