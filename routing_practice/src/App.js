import React from 'react';
import './App.css';

import { Router, Link } from '@reach/router'; // npm i @reach/router
import HomeComponent from './components/HomeComponent';
import NumberComponent from './components/NumberComponent'
import WordComponent from './components/WordComponent';
import WordAndColorComponent from './components/WordAndColorComponent';

function App() {
  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <Link to = "/">Index</Link>
      |
      <Link to = "home">Home</Link>
      <hr/>

      <Router>
        <HomeComponent path="/home"/>
        <WordComponent path="/:word"/>
        <NumberComponent path="/:num"/>
        <WordAndColorComponent path="/:word/:textColor/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;