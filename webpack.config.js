const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  devServer: {
    contentBase: './',
    port: 5000
  },
  entry: './src/index.tsx',
  output: {
    path:  path.resolve(__dirname,'build'),
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.tsx?/,
        exclude:/node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.scss/,
        loader:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: './index.html'
    // })
  ],
  resolve: {extensions:['.ts','.tsx','.js']}
}
