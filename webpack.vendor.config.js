/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const shorthand = mode => (mode === 'development' ? 'dev' : 'prod');

const createConfig = mode => ({
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    vendor: ['prop-types', 'react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'vendor'),
    filename: `[name]_[hash:6].${shorthand(mode)}.js`,
    library: '[name]_[hash:6]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_[hash:6]',
      path: path.join(__dirname, `vendor/manifest.${shorthand(mode)}.json`),
    }),
  ],
  mode,
});

module.exports = [createConfig('development'), createConfig('production')];
