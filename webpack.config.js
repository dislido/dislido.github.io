const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dllManifestDev = require('./vendor/manifest.dev.json');
const dllManifestProd = require('./vendor/manifest.prod.json');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isDev = mode === 'development';
const vendorFileName = `${(isDev ? dllManifestDev : dllManifestProd).name}.${isDev ? 'dev' : 'prod'}.js`;

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              cache: true,
            },
          },
        ],
      }, {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }, {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      }, {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              // outputPath: path.resolve(__dirname, 'dist/assets'),
              // publicPath: './dist/assets',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: `vendor/${vendorFileName}` },
    ]),
    new webpack.DllReferencePlugin({
      manifest: isDev ? dllManifestDev : dllManifestProd,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash:6].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.template.html',
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [vendorFileName],
      append: false,
    }),
  ],
  mode,
  devtool: false, // cheap-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // style: path.resolve(__dirname, 'src/style/'),
      '@/assets': path.resolve(__dirname, 'assets'),
      '@/page': path.resolve(__dirname, 'src/page'),
      '@/util': path.resolve(__dirname, 'src/util'),
      '@/component': path.resolve(__dirname, 'src/component'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
