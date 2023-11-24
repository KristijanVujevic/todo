
import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard'; 

const Completed = ({ completedTasks, onDeleteTask, onToggleTaskCompletion }) => (
  <TaskCard tasks={completedTasks} onDeleteTask={onDeleteTask} onToggleTaskCompletion={onToggleTaskCompletion} />
);

Completed.propTypes = {
  completedTasks: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTaskCompletion: PropTypes.func.isRequired,
};

export default Completed;
