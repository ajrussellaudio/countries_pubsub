const config = {
  entry: `${ __dirname }/client/src/app.js`,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${ __dirname }/client/public`
  },
  devtool: 'source-map'
};

module.exports = config;
