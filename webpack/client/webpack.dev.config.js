import Config from 'webpack-config';

export default new Config().extend('webpack.base.config.js').merge({
  mode: 'development',
  devtool: 'source-map'
});
