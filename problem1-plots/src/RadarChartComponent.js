import React from 'react';
import { Radar } from 'react-chartjs-2';
import { RadialLinearScale } from 'chart.js';
import ChartJS from 'chart.js/auto';

ChartJS.register(RadialLinearScale);

function RadarChartComponent() {
  const radarData = {
    labels: ['Metric #1', 'Metric #2', 'Metric #3', 'Metric #4', 'Metric #5'],
    datasets: [
      {
        label: 'Model 1',
        data: [0.9978, 0.8527, 0.2739, 0.8041, 0.6353],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      // ... Add other models here
    ]
  };

  return <Radar data={radarData} />;
}

export default RadarChartComponent;