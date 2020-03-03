module.exports = {
  module: {
    rules: [
      {
        // Process all js and jsx
        // files with Babel
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /\.stories\.(js|jsx)$/,
          /\.test\.(js|jsx)$/
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Load all css imports
        // with style-loader and css-loader
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    // Look for index.js first,
    // then fall back to index.jsx
    extensions: ['.js', '.jsx']
  },
  output: {
    // Main module will have a default export
    libraryTarget: 'umd'
  }
}
