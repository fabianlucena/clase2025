/**
 * Cree un archivo local llamado config.local.js donde coloque los valores 
 * que no se almacenan en el repositorio.
 */

import configLocal from './config.local.js';

var config = {
  port: 3000,
  ...configLocal,
};

export default config;