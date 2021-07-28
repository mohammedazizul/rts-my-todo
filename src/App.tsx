import React, { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoCard from './components/TodoCard/TodoCard';

function App() {

  const [ todoData, setTodoData] = useState([
    {
      sl: 100,
      heading: "todo one",
      details: "todo one details"
    },
    {
      sl: 200,
      heading: "todo one",
      details: "todo one details"
    },
    {
      sl: 300,
      heading: "todo one",
      details: "todo one details"
    },
    {
      sl: 400,
      heading: "todo one",
      details: "todo one details"
    }
  ]);

  console.log(setTodoData);
  
  return (
    <div className="container">
      <h3 style={{textAlign:"center"}}>my todo</h3>
      <CreateTodo/>
      <div className="grid-container">
      {
        todoData.map((data) => (
          <TodoCard 
          key={data.sl} 
          sl={data.sl} 
          heading={data.heading} 
          details={data.details}
          />
        ))
      }
      </div>
    </div>

  );
}

export default App;
