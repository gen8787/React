import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios' // npm i axios

function App() {

  const [poke, setPoke] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8') //807
      .then(res => setPoke(res.data.results))
      .catch(err => console.log(err))
  }, []);

  const showPoke = () => {
    setSuccess(true);
    console.log(poke);
  }

  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <hr/>
      <button onClick={showPoke}>Fetch Pokemon</button>

      {success ? poke.map((poke, idx) => {
        return <li key={idx}>{poke.name}</li>
      }) : ""}

      </div>
  );
}

export default App;
