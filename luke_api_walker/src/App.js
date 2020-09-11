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
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Link to = "/">Home</Link>
      <hr/>
      <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="category">Search for: </label>
            <select name="category" id="category" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="none" selected disabled hidden>Select Category</option>
              <option value="people">people</option>
              <option value="planets">planets</option>
              <option value="starships">starships</option>
              <option value="species">species</option>
            </select>
          </div>
          <div>
            <label htmlFor="id">ID: </label>
            <select name="id" id="id" value={selectedId} onChange={e => setSelectedId(e.target.value)}>
              <option value="none" selected disabled hidden>Select ID</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
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
  );
}

export default App;