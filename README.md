# RELAI Front-end Interview Questions

## Important Instructions
- Please make sure to follow all the steps below to generate the data you need to finish both the questions below.
- If you are facing any difficulty in the above, raise an issue in this repository.
- Any submission you make must have a `README.md` that clearly documents all the steps needed to run your submission.

## Setup

1. In a python virtual environment running at least python 3.9, install the requirements (`numpy`):
    ```bash
    pip install -r requirements.txt
    ```
    You may skip this step if you have those python packages already.
2. Generate dummy data:
    ```bash
    python problem1.py
    python problem2.py
    ```
These commands should create two JSON files `problem1.json` and `problem2.json` respectively which you will use in the following problems.

## Problem 1

For this problem, you will use the data in `problem1.json`. Design and implement a webpage that shows the following three plots using [Plotly.js](https://plotly.com/javascript/):
1. Using the `losses` array which is of shape `(5, 5000)`, show a line plot that depicts the loss values of 5 models over 5000 steps. So, the plot has 5 lines each corresponding to a row in the array. The X and Y-axes should be labelled "Steps" and "Loss" respectively. Please include a legend that shows the color of the line and the model that line corresponds to.  In addition, implement [smoothing](https://en.wikipedia.org/wiki/Exponential_smoothing) for the line plots with a slider that controls the smoothing factor. Bonus points if the model labels in the legend are (de)selectable; deselecting a label should remove that line from the plot while selecting should show the line. 
2. Using the `confusion matrices` array which is of shape `(5, 2, 2)`, show a bar plot that depicts the classwise accuracies for these 5 models. Each `2 x 2` array represents the confusion matrix for one model on 2 classes. Please label the classes `Class #1` and `Class #2`. Show the bars of different models in different colors, 5 in total.
3. Using the `radar_data` array which of shape `(5, 5)`, show a radar chart for 5 models (dim 0) and 5 metrics (dim 1). You may label the metrics `Metric #1` through `Metric #5`.

You will be judged based on how you layout these plots, how aesthetically pleasing the colors are, the readability of these plots among other factors.

## Problem 2

For this problem, you will use the data in `problem2.json` and the images in the `cats_vs_dogs` folder created when you run `python problem2.py`. Implement a webpage that shows all the 20 images in the folder in a grid. Each image should be clickable and upon clicking an image, it should be evident that the image has been selected. Clicking on an already selected image, should deselect the image. This functionality is similar to how any modern mobile photos app implements image selection as illustrated in the screenshot below:

![Image selection](image-selection.jpg)

Again, this is only an illustration. So, feel free to use any style of checkmarks or other visual cues to indicate image selections.

In addition to this grid, the page should show a number labelled as "Metric" which is just the difference of average score for selected images and average score for non selected images. For example, if there were only 4 images and only image 2 was selected, the "Metric" would be:

```
Metric = score_2 - 1 / 3 * (score_1 + score_3 + score_4)
```
The individual scores for each image in the folder can be found in `problem2.json`.

You will be judged based several factors including but not limited to:
* The layout you choose to show the grid and the metric in
* Overall aesthetics of the page, particularly the image selection
* Responsiveness of the page, particularly, changing the selection of images should update the metric instantly
