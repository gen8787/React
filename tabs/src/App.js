import React from 'react';
import TabComponent from './components/TabComponent'
import './App.css';

function App() {

  // const allContent = [
  //   "Tab 1 content is showing here.",
  //   "Tab 2 content is showing here.",
  //   "Tab 3 content is showing here.",
  //   "Tab 4!"
  // ];

  return (
    <div className="App">
      <h1>Tabs</h1>
      <hr/>
      {/* <TabComponent allContent={allContent}/> */}
      <TabComponent />
    </div>
  );
}

export default App;