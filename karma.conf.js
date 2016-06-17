var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      './src/client/js/**/__tests__/*.js'
    ],
    preprocessors: {
      './src/client/js/**/*.js': ['webpack'],
      './test/**/*.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx', '.json']
      },
      module: {
        loaders: [
          {
            test: /\.json$/, loader: 'json'
          },
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\/sprite\/.*\.svg$/,
            loader: 'svg-sprite?' + JSON.stringify({
              name: '[name]',
              prefixize: false,
            }) + '!img-loader?minimize',
          },
        ],
        postLoaders: [
          {
            test: /\.jsx?$/,
            exclude: /(__tests__|node_modules|bower_components)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      plugins: []
    },

    webpackMiddleware: {
      quiet: true,
      noInfo: true
    },

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },

    reporters: ['notify', 'mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    //browsers: ['PhantomJS', 'Chrome'],
    browsers: ['Chrome'],
    singleRun: false,

    mochaReporter: {
      output: 'autowatch'
    },

    coverageReporter: {
      dir: '/tmp/coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text', subdir: '.', file: 'report.txt' },
        { type: 'text-summary' }
      ]
    },

    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-webpack',
      'karma-babel-preprocessor',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-notify-reporter',
      'istanbul-instrumenter-loader'
    ]
  });
};
