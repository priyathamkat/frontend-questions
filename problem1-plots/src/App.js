import React from 'react';
import './App.css';
import LinePlot from './LinePlot';
import data from './problem1.json';
import RadarChartComponent from './RadarChartComponent';
debugger

function App() {
  return (  
    <div className="App">
      <h1>Problem 1</h1>
      <h2>Line Plot for losses</h2>
      <LinePlot losses={data.losses} />
      <h2>Radar Chart</h2>
      <RadarChartComponent />;
    </div>
  );
}

export default App;
