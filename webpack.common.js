const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  devServer: {
    // port: 3000,
    static: {
      directory: path.join(__dirname, 'src'),
    }
  }
};
