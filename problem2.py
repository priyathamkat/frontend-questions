import json
from pathlib import Path
from zipfile import ZipFile

import numpy as np

path_to_zip = Path(__file__).parent / "cats_vs_dogs.zip"
extract_path = Path(__file__).parent / "cats_vs_dogs"

if not extract_path.exists():
    with ZipFile(path_to_zip) as zip_file:
        zip_file.extractall(extract_path)

images = list(extract_path.iterdir())
images.sort()

rng = np.random.default_rng(287542)
scores = {image.name: rng.uniform(0, 1) for image in images}

with open("problem2.json", "w") as f:
    json.dump(scores, f)
