import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_fit_image_size_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_fit_image_size_extension:plugin',
  description: 'Jupyterlab extension to fit image to view size when image too large, and leave it as-is when smaller. This applies to all raster images (png, jpg etc..) and vector images (svg etc..)',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_fit_image_size_extension is activated!');
  }
};

export default plugin;
