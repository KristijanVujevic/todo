
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// TaskCard.js
const TaskCard = ({ tasks, onDeleteTask, onToggleTaskCompletion }) => (
    <Card>
      <Card.Body>
        <ListGroup>
          {tasks.map((item) => (
            <ListGroup.Item
              key={item.id}
              style={{ backgroundColor: item.completed ? 'lightgreen' : 'transparent' }}
            >
              <Form.Check
                type="checkbox"
                id={`checkbox-${item.id}`}
                label={item.text}
                checked={item.completed}
                onChange={() => onToggleTaskCompletion(item.id)}
              />
              <Button variant="danger" size="sm" onClick={() => onDeleteTask(item.id)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
  
  TaskCard.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onToggleTaskCompletion: PropTypes.func.isRequired,
  };
  
  export default TaskCard;
  