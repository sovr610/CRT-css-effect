const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'crt-effect.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'CRTEffect',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};