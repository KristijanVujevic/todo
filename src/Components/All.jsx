
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


const All = ({ zadLista, onAddTask, onDeleteTask, onToggleTaskCompletion }) => {
  const [task, setTask] = useState('');
  

  const addTask = () => {
    if (task.trim() !== '') {
      onAddTask({ text: task, completed: false });
      setTask('');
    }
  };

  const deleteTask = (index) => {
    onDeleteTask(index);
  };

  const toggleTaskCompletion = (index) => {
    onToggleTaskCompletion(index);
  };

  return (
    <Card >
      <Card.Body>
      
        <InputGroup className={` mb-3 `}>
          <Button variant="outline-secondary" id="button-addon1" onClick={addTask}>
            Add
          </Button>
          <Form.Control
            placeholder="Enter to-do"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </InputGroup>
        <ListGroup>
          {zadLista.map((item, index) => (
            <ListGroup.Item key={index} style={{ backgroundColor: item.completed ? 'lightgreen' : 'transparent' }}>
            <Form.Check
              type="checkbox"
              id={`checkbox-${index}`}
              label={item.text}
              checked={item.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};


All.propTypes = {
  zadLista: PropTypes.array.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTaskCompletion: PropTypes.func.isRequired,
};

export default All;
