const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

const argv = require('yargs').argv;

const isDevMode = argv.mode === 'development';

module.exports = {
  entry: {
    polyfills: ['@babel/polyfill', 'whatwg-fetch'],
    index: path.join(__dirname, 'src/app.js'),
  },
  output: {
    path: path.join(__dirname, 'public')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css', '.scss'],
    alias: {
      root: path.resolve(__dirname, './')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Front Camp News',
      template: './index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/style.css',
    }),
    new CopyWebpackPlugin([
      { from: 'assets/*.png' },
      { from: 'assets/semantic/dist/semantic.min.*' },
      { from: 'assets/semantic/dist/themes/default/assets/fonts/*' }
    ])
  ],

  devtool: isDevMode && 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    open: true
  }
};