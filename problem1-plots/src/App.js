import React from 'react';
import './App.css';
import LinePlot from './LinePlot';
import data from './problem1.json';


function App() {
  return (  
    <div className="App">
      <h1>Problem 1</h1>
      <h2>Line Plot for losses</h2>
      <LinePlot losses={data.losses} />
    </div>
  );
}

export default App;
