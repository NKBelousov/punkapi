const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: isProduction,
      inject: 'body',
      minify: {
        collapseWhitespace: isProduction,
        removeComments: isProduction,
        removeRedundantAttributes: isProduction,
        removeScriptTypeAttributes: isProduction,
        removeStyleLinkTypeAttributes: isProduction,
        useShortDoctype: isProduction,
      },
      showErrors: isProduction,
      template: path.resolve(__dirname, 'src/template.ejs'),
      title: 'Noveo Rest API',
    }),
  ],
};
