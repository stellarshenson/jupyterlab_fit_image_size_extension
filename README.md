# jupyterlab_fit_image_size_extension

[![GitHub Actions](https://github.com/stellarshenson/jupyterlab_fit_image_size_extension/actions/workflows/build.yml/badge.svg)](https://github.com/stellarshenson/jupyterlab_fit_image_size_extension/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/jupyterlab_fit_image_size_extension.svg)](https://www.npmjs.com/package/jupyterlab_fit_image_size_extension)
[![PyPI version](https://img.shields.io/pypi/v/jupyterlab-fit-image-size-extension.svg)](https://pypi.org/project/jupyterlab-fit-image-size-extension/)
[![Total PyPI downloads](https://static.pepy.tech/badge/jupyterlab-fit-image-size-extension)](https://pepy.tech/project/jupyterlab-fit-image-size-extension)
[![JupyterLab 4](https://img.shields.io/badge/JupyterLab-4-orange.svg)](https://jupyterlab.readthedocs.io/en/stable/)
[![Brought To You By KOLOMOLO](https://img.shields.io/badge/Brought%20To%20You%20By-KOLOMOLO-00ffff?style=flat)](https://kolomolo.com)

Automatically scales images to fit within the view when they exceed container dimensions, while preserving original size for smaller images. Applies to both raster formats (PNG, JPG) and vector formats (SVG).

**Full disclosure:** This extension does exactly one thing. It makes oversized images behave themselves. No more horizontal scrolling, no more squinting at images that decided to assert dominance over your notebook. Small images stay small, big images get politely asked to fit in.

## Features

- **Automatic image scaling** - Large images are scaled down to fit within view boundaries
- **Preserves small images** - Images smaller than container remain at original size
- **Raster format support** - Works with PNG, JPG, GIF, and other raster formats
- **Vector format support** - SVG images also respect container bounds
- **Notebook outputs** - Handles images in code cell outputs
- **Markdown cells** - Images in markdown cells are also scaled
- **Standalone viewer** - Works when opening image files directly in JupyterLab
- **Zero configuration** - Just install and forget

## Installation

Requires JupyterLab 4.0.0 or higher.

```bash
pip install jupyterlab_fit_image_size_extension
```

## Uninstall

```bash
pip uninstall jupyterlab_fit_image_size_extension
```

## Development

```bash
# Install dependencies
jlpm install

# Build the extension
jlpm build

# Development mode with watch
jlpm watch

# Run tests
jlpm test

# Lint and format
jlpm lint
```

See [RELEASE](RELEASE.md) for packaging instructions.

## License

BSD-3-Clause
