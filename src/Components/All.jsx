// All.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const All = ({
  zadLista,
  onAddTask,
  onDeleteTask,
  onToggleTaskCompletion,
  onDeleteAllCompletedTasks,
  completedTasks,
}) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      onAddTask({ id: Date.now(), text: task, completed: false });
      setTask("");
    }
  };

  const deleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  const toggleTaskCompletion = (taskId) => {
    onToggleTaskCompletion(taskId);
  };

  return (
    <Card>
      <Card.Body>
        <InputGroup className={` mb-3 `}>
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={addTask}
          >
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
          {zadLista.map((item) => (
            <ListGroup.Item
              key={item.id}
              style={{
                backgroundColor: item.completed ? "lightgreen" : "transparent",
              }}
            >
              <Form.Check
                type="checkbox"
                id={`checkbox-${item.id}`}
                label={item.text}
                checked={item.completed}
                onChange={() => toggleTaskCompletion(item.id)}
              />
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {completedTasks.length > 0 && (
          <Button
            variant="danger"
            onClick={onDeleteAllCompletedTasks}
            className="mt-3"
          >
            Delete All Completed
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

All.propTypes = {
  zadLista: PropTypes.array.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTaskCompletion: PropTypes.func.isRequired,
  onDeleteAllCompletedTasks: PropTypes.func.isRequired,
};

export default All;
