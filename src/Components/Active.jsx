
import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard'; 

const Active = ({ activeTasks, onDeleteTask, onToggleTaskCompletion }) => (
  <TaskCard tasks={activeTasks} onDeleteTask={onDeleteTask} onToggleTaskCompletion={onToggleTaskCompletion} />
);


Active.propTypes = {
  activeTasks: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTaskCompletion: PropTypes.func.isRequired,
};

export default Active;
