import React from 'react';
import './App.css';
import LinePlot from './LinePlot';
import data from './problem1.json';
import { Bar } from 'react-chartjs-2';
import { getChartData } from './dataProcessing';


function App() {
  const chartData = getChartData(data.confusion_matrices);
  
  return (  
    <div className="App">
      <h1>Problem 1</h1>
      <h2>Line Plot for losses</h2>
      <LinePlot losses={data.losses} />

      <h2>Classwise Accuracies for Models</h2>
            <Bar 
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Classwise Accuracies for Models',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 1
                            }
                        }]
                    }
                }}
            />
    </div>
  );
}

export default App;
