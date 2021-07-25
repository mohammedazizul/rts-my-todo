import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
  return (
    <div>
      <h3>my todo</h3>
      <CreateTodo/>
      <div className="grid-container">
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
      </div>
    </div>

  );
}

export default App;
