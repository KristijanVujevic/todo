import React from "react";



const Active = ({ activeTasks }) => {
  

  return (
    <div className={`active-tasks`}>
      
      <h2>Active Tasks</h2>
      <ul>
        {Array.isArray(activeTasks) && activeTasks.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Active;
