const path = require('path')


const extendedConfig = ({
  mode = 'development',
  outputPath = 'dev'
}, argv) => {
console.log({mode, outputPath, argv})
}

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  context: path.resolve(__dirname, '.'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
