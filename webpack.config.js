const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
});
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  // mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/api': { target: 'http://localhost:3000/' },
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
      ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', ".css", ".scss"],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ]
}