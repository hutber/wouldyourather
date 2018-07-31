import Config from 'webpack-config';
import path from 'path';

const WebpackServeUrl = 'http://localhost:3002';

export default new Config().merge({
  entry: './src/client/index',
  output: {
    path: path.resolve('dist'),
    publicPath: `${WebpackServeUrl}/dist/`, // MUST BE FULL PATH!
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve('src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap',
            query: {
              modules: true,
              sourceMap: true,
              url: false,
              importLoaders: 2
            }
          },
          'postcss-loader?sourceMap&parser=postcss-scss'
        ]
      }
    ]
  }
});
