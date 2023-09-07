import { Chart } from 'chart.js';

 export const barChartOptions = ()=> {
    new Chart({
        type: 'bar',
        title: {
            display: true,
            text: 'Classwise Accuracies for Models',
            fontSize: 25
        },
        egend: {
            display: true,
            position: 'top'
          },
          scales: {
            xAxes: [{
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              },
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }]
          },
          tooltips: {
            enabled: true
          }
    })
 } 

    

    
