const commonConfig = require('./config/webpack-config');

const config = commonConfig('production');
module.exports = {
  ...config,
};
