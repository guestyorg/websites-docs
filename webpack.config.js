const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./']
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: resolve(__dirname, 'src'),
        options: {
          presets: [['env', { module: false }]]
        }
      }
    ]
  },

  plugins: [
    new HtmlPlugin()
  ]
};
