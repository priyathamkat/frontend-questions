import json

import matplotlib.pyplot as plt
import numpy as np

num_models = 5
num_steps = 5000

steps = np.arange(1, num_steps + 1)
data = np.zeros((num_models, num_steps))

rng = np.random.default_rng(287542)

ks = 5 / num_steps * np.arange(1, num_models + 1)

for i in range(num_models):
    mu = rng.uniform(-0.2, 0.2)
    sigma = rng.uniform(0, 0.03)
    data[i] = np.exp(-ks[i] * steps) + rng.normal(mu, sigma, num_steps)

with open("problem1.json", "w") as f:
    json.dump(data.tolist(), f)

plt.plot(steps, data.T)
plt.xlabel("Steps")
plt.ylabel("Loss")
plt.savefig("problem1.png")
