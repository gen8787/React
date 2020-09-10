import React, {useState} from 'react';
import './App.css';
import TodoComponent from './components/TodoComponent';
import TodoDisplay from './components/TodoDisplay';

function App() {

  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <hr/>
      <TodoComponent allTodos={allTodos} setAllTodos={setAllTodos}/>
      {
        allTodos.map((todo, idx) =>
          <TodoDisplay todo={todo} allTodos={allTodos} setAllTodos={setAllTodos} index={idx} key={idx}/>
        )
      }
    </div>
  );
}

export default App;