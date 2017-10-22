
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
  },
  resolve: {
    // With the aliases in this sequence, you can't resolve
    // import {sum} from './utils/sum';
    // But if you put the './utils' alias at the bottom,
    // there are no errors and imports from both './utils'
    // and './utils/sum' will work.
    alias: {
      "./utils": "./genericUtils/index.js",
      "./utils/sum": "./genericUtils/sum.js"
    }
  }
};