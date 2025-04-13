import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';


const TaskList = ({ tasks, deleteTask ,modifyTask}) => {
  return (
<ul>
      {tasks.map((task) => (
        <TaskItem 
        key={task.id}
        task={task} 
        deleteTask={deleteTask} 
        modifyTask={modifyTask}
         />
      ))}
    </ul>
  
  );
};

export default TaskList;
