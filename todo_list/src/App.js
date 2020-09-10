import React, {useState} from 'react';
import './App.css';
import TodoComponent from './components/TodoComponent';
import TodoDisplay from './components/TodoDisplay';

function App() {

  const [allToDos, setAllToDos] = useState([]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <hr/>
      <TodoComponent allToDos={allToDos} setAllToDos={setAllToDos}/>
      {
        allToDos.map((todo, idx) =>
          <TodoDisplay todo={todo} allToDos={allToDos} setAllToDos={setAllToDos} index={idx} key={idx}/>
        )
      }
    </div>
  );
}

export default App;