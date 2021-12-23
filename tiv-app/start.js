const commonConfig = require('./config/webpack-config');

const config = commonConfig('development');

module.exports = {
  ...config,
  watchOptions: {
    ignored: ['jsconfig.json', '/node_modules'],
  },
  devServer: {
    compress: true,
    hot: true,
    https: true,
    port: 8080,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
};
