import './App.css';
import CreateTodo from './components/CreateTodo/CreateTodo';

function App() {

  return (
    <div className="container">
      <h3 style={{textAlign:"center"}}>my todo</h3>
      <hr style={{width:"50%"}} />
      <CreateTodo/>
      <hr style={{width:"100%"}} />
    </div>
  );
}

export default App;
