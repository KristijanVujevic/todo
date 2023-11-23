
import React from "react";




const Completed = ({ completedTasks }) => {
    
  return (
    <div className={`completed-tasks`}>
        
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
