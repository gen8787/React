import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/BoxForm'
import BoxComponent from './components/BoxComponent'

function App() {

    const [color, setColor] = useState("");
    const [allBoxes, setAllBoxes] = useState([]); // Starts as empty Array

    const formSubmit = () => {
      setAllBoxes([...allBoxes, color]);
      setColor("");
    }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <hr/>
      <BoxForm color={color} setColor={setColor} formSubmit={formSubmit}/>
      {
        allBoxes.map((color, idx) =>
        <BoxComponent color={color} key={idx}/>
        )
      }
    </div>
  );
}

export default App;
