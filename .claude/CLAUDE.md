<!-- Import workspace-level CLAUDE.md configuration -->
<!-- See /home/lab/workspace/.claude/CLAUDE.md for complete rules -->

# Project-Specific Configuration

This file extends workspace-level configuration with project-specific rules.

## Project Context

**jupyterlab_fit_image_size_extension** - A JupyterLab 4 extension that automatically scales images to fit within the view when they exceed container dimensions, while preserving original size for smaller images. Applies to both raster formats (PNG, JPG) and vector formats (SVG).

## Technology Stack

- **Frontend**: TypeScript, JupyterLab 4.x extension API
- **Build System**: jlpm (Yarn), Hatch, jupyter-builder
- **Testing**: Jest (unit), Playwright/Galata (integration)
- **Package Distribution**: npm, PyPI

## Key Files

- `src/index.ts` - Extension entry point and plugin definition
- `style/base.css` - CSS styling for image fitting behavior
- `package.json` - npm package configuration and JupyterLab extension metadata
- `pyproject.toml` - Python package configuration with Hatch build system

## Development Commands

```bash
# Install dependencies and build
jlpm install
jlpm build

# Development mode with watch
jlpm watch

# Run tests
jlpm test

# Lint and format
jlpm lint
```

## Extension Implementation Notes

The extension activates automatically on JupyterLab startup. Core functionality involves CSS-based image scaling with `max-width: 100%` and `height: auto` patterns applied to image outputs in notebook cells.
