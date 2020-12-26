const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './index.js',
    game: './game.js',
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.',
    open: true,
  },
};
