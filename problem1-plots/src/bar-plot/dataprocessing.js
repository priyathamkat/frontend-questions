export function calculateAccuracies(confusionMatrices) {
    let accuracies = [];

    for (let matrix of confusionMatrices) {
        let TP = matrix[0][0];
        let FP = matrix[0][1];
        let FN = matrix[1][0];
        let TN = matrix[1][1];

        let class1Accuracy = TP / (TP + FN);
        let class2Accuracy = TN / (TN + FP);

        accuracies.push([class1Accuracy, class2Accuracy]);
    }

    return accuracies;
}

export function getChartData(confusionMatrices) {
    
}
