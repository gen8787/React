import React, { useState } from 'react';
import './App.css';
import { Router, Link, navigate } from '@reach/router';

import PeopleComponent from './components/PeopleComponent';
import PlanetsComponent from './components/PlanetsComponent';
import SpeciesComponent from './components/SpeciesComponent';
import StarshipsComponent from './components/StarshipsComponent';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedId, setSelectedId] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${document.getElementById('category').value}/${document.getElementById('id').value}`);
  }

  return (
    <>
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Link to = "/">Home</Link>
      <hr/>
      <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="category">Search for: </label>
            <select name="category" id="category" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="" defaultValue disabled>Select Category</option>
              <option value="people">People</option>
              <option value="planets">Planets</option>
              <option value="starships">Starships</option>
              <option value="species">Species</option>
            </select>
          </div>
          <div>
            <label htmlFor="id">ID: </label>
            <input onChange={e => setSelectedId(e.target.value)} type="text" id="id" value={selectedId} name="id" placeholder="Enter an id"/>
          </div>
          <div>
            <button type="submit">Search</button>
          </div>
      </form>

      <Router>
        <PeopleComponent path="/people/:id"/>
        <PlanetsComponent path="/planets/:id"/>
        <SpeciesComponent path="/species/:id"/>
        <StarshipsComponent path="/starships/:id"/>
      </Router>
    </div>
    </>
  );
}

export default App;