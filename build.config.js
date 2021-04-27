module.exports = env => {
  const isDev = env.NODE_ENV === 'development';
  const config = {
    mode: env.NODE_ENV,
    devtool: isDev ? 'source-map' : 'none',
    entry: {
      index: './index.ts',
    },
    output: {
      path: require('path').resolve(__dirname, isDev ? 'test' : 'lib'),
      library: 'TypeJsonValidator'
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {loader: 'babel-loader'}
          ],
          exclude: /node_modules/
        },
        {
          test: /\.ts$/,
          use: [
            {loader: 'babel-loader'},
            {loader: 'ts-loader'}
          ]
        }
      ]
    },
  };
  return [
    require('webpack-merge')(config, {
      output: {
        filename: isDev ? 'node.lib.dev.js' : 'node.lib.js',
        libraryTarget: 'commonjs2',
      }
    }),
    require('webpack-merge')(config, {
      output: {
        filename: isDev ? 'browser.dev.js' : 'browser.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    })
  ];
};

