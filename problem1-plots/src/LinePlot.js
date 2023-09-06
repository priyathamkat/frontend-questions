import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const LinePlot = ({ losses }) => {
  const [smoothingFactor, setSmoothingFactor] = useState(1);

  const generateX = () => {
    return Array.from({ length: losses[0].length }, (_, index) => index + 1);
  };

  const smooth = (arr, alpha) => {
    let smoothedArr = [];
    let prev = arr[0];

    arr.forEach(val => {
      const current = alpha * val + (1 - alpha) * prev;
      smoothedArr.push(current);
      prev = current;
    });

    return smoothedArr;
  };

  const generateLossData = () => {
    return losses.map((lossArray, index) => ({
      x: generateX(),
      y: smoothingFactor === 1 ? lossArray : smooth(lossArray, smoothingFactor),
      type: 'scatter',
      mode: 'lines',
      name: `Model ${index + 1}`
    }));
  };

  return (
    <div>
      <Plot
        data={generateLossData()}
        layout={{ title: 'Model Loss over Steps', xaxis: { title: 'Steps' }, yaxis: { title: 'Loss' } }}
      />
      <input
        type="range"
        min="0.01"
        max="1"
        step="0.01"
        value={smoothingFactor}
        onChange={e => setSmoothingFactor(parseFloat(e.target.value))}
      />
      <label>Smoothing: {smoothingFactor}</label>
    </div>
  );
};

export default LinePlot;