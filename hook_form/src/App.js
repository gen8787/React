import React from 'react';
import './App.css';

import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1>Hook Form</h1>
      <hr/>
      <UserForm />
      {/* <p>Your Form Data</p>
      <p>First Name: </p>
      <p>Last Name: </p>
      <p>Email: </p>
      <p>Password: </p>
      <p>Confirm Password: </p> */}
    </div>
  );
}

export default App;
