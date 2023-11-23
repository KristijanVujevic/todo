
import React, { useState } from "react";
import './App.css';
import All from "./Components/All";
import Completed from "./Components/Completed";
import Active from "./Components/Active";
import { Routes, Route, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function App() {
  const [zadLista, setZadLista] = useState([]);
  
  

  const addTask = (newTask) => {
    setZadLista([...zadLista, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...zadLista];
    updatedTasks.splice(index, 1);
    setZadLista(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...zadLista];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setZadLista(updatedTasks);
    
  };

  const completedTasks = zadLista.filter((task) => task.completed);
  const activeTasks = zadLista.filter((task) => !task.completed);

  return (
    
      <div className={`App`}>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand as={NavLink} to="/">To-do app</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button variant="outline-primary" as={NavLink} to="/" className="mx-2">Home</Button>
              <Button variant="outline-primary" as={NavLink} to="/active" className="mx-2">Active</Button>
              <Button variant="outline-primary" as={NavLink} to="/completed" className="mx-2">Completed</Button>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={<All zadLista={zadLista} onAddTask={addTask} onDeleteTask={deleteTask} onToggleTaskCompletion={toggleTaskCompletion} />}
          />
          <Route
            path="/active"
            element={<Active activeTasks={activeTasks} onDeleteTask={deleteTask} onToggleTaskCompletion={toggleTaskCompletion} />}
          />
          <Route
            path="/completed"
            element={<Completed completedTasks={completedTasks} onDeleteTask={deleteTask} onToggleTaskCompletion={toggleTaskCompletion} />}
          />
        </Routes>
      </div>
    
  );
}

export default App;
