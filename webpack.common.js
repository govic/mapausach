const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    }
  }
};
