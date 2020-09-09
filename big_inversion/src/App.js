import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard'; // <~~ import component to use

function App() {
  return (
    <div className="App">
      <h1>Big Inversion</h1>
      <hr/>

      <PersonCard
        firstName = {"John"}
        lastName = {"Smith"}
        age = {88}
        hairColor = {"Brown"}
      />

      <PersonCard
        firstName = {"Jane"}
        lastName = {"Doe"}
        age = {45}
        hairColor = {"Black"}
      />

      <PersonCard
        firstName = {"Millard"}
        lastName = {"Fillmore"}
        age = {50}
        hairColor = {"Brown"}
      /> 

      <PersonCard
        firstName = {"Maria"}
        lastName = {"Smith"}
        age = {62}
        hairColor = {"Brown"}
      /> 

    </div>
  );
}

export default App;
