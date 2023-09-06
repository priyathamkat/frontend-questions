export const barChartOptions = {
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
};
