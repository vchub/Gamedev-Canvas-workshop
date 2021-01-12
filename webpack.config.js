const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    index: './t.js',
    // index: './index.js',
    // game: './game.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mocha',
      filename: 'mocha.html',
      template: 'exercise/index.html',
    }),
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.',
    open: true,
  },
};
