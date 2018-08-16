const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
    ],
  },
  mode: 'development',
};
