const path = require('path');
const nodeExternals = require('webpack-node-externals')

client = {
  mode: 'production',
  entry: './clientCode.js',
  output: {
    globalObject: 'this',
    path: path.resolve('dist'),
    filename: 'client.js',
    library: 'realShare',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};

server = {
  target: 'node',
  mode: 'production',
  entry: './serverCode.js',
  output: {
    globalObject: 'this',
    path: path.resolve('dist'),
    filename: 'server.js',
    library: 'realShare',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};

module.exports = [ server, client ];