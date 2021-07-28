import React, { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo/CreateTodo';

function App() {

  return (
    <div className="container">
      <h3 style={{textAlign:"center"}}>my todo</h3>
      <CreateTodo/>
    </div>
  );
}

export default App;
