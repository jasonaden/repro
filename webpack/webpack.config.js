
module.exports = {
  entry: './src/index.js',
  output: {filename: './dist/bundle.js'},
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};