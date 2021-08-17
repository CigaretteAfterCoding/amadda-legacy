const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      Styles: path.resolve(__dirname, './src/styles'),
      Stories: path.resolve(__dirname, './src/stories'),
      Routes: path.resolve(__dirname, './src/routes'),
      Pages: path.resolve(__dirname, './src/pages'),
      Hooks: path.resolve(__dirname, './src/hooks'),
      Elements: path.resolve(__dirname, './src/elements'),
      Components: path.resolve(__dirname, './src/components'),
      Apis: path.resolve(__dirname, './src/apis'),
      Assets: path.resolve(__dirname, './src/assets'),
      Types: path.resolve(__dirname, './src/types'),
      Images: path.resolve(__dirname, './src/images'),
      Layouts: path.resolve(__dirname, './src/layouts'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(mp4|jpg|png|jpeg)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = config;
