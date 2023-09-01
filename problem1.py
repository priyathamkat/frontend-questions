import json

import numpy as np

num_models = 5
num_steps = 5000

steps = np.arange(1, num_steps + 1)
losses = np.zeros((num_models, num_steps))

rng = np.random.default_rng(287542)

ks = 5 / num_steps * np.arange(1, num_models + 1)

for i in range(num_models):
    mu = rng.uniform(-0.2, 0.2)
    sigma = rng.uniform(0, 0.03)
    losses[i] = np.exp(-ks[i] * steps) + rng.normal(mu, sigma, num_steps)

confusion_matrices = np.zeros((num_models, 2, 2))

for i in range(num_models):
    confusion_matrices[i] = rng.integers(10, 20, size=(2, 2))
    confusion_matrices[i] += np.diag(rng.integers(100, 200, size=2))

radar_data = rng.uniform(0, 1, size=(num_models, 5))

data = {
    "losses": losses.tolist(),
    "confusion_matrices": confusion_matrices.tolist(),
    "radar_data": radar_data.tolist(),
}

with open("problem1.json", "w") as f:
    json.dump(data, f)
