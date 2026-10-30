import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @stellarshenson/jupyterlab-fit-image-size-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@stellarshenson/jupyterlab-fit-image-size-extension:plugin',
  description:
    'Jupyterlab extension to fit image to view size when image too large, and leave it as-is when smaller. This applies to all raster images (png, jpg etc..) and vector images (svg etc..)',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log(
      'JupyterLab extension @stellarshenson/jupyterlab-fit-image-size-extension is activated!'
    );
  }
};

export default plugin;
