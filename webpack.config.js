/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SupportedBrowserList = ['last 2 versions', 'ie >= 9'];
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDebug = !(process.argv.includes('--release') || process.argv.includes('-r'));
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

/**
 * Webpack configuration
 * http://webpack.github.io/docs/configuration.html
 */
const config = {

  // The base directory
  context: path.join(__dirname, 'src', 'client'),

  // The entry point for the bundle
  entry: {
    app: ['./js/app/index.js'],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'immutable',
    ],
  },

  // Options affecting the output of the compilation
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].[hash].js',
    publicPath: '/', // MUST HAVE TRAILING SLASH IF NOT /
    sourceMapFileName: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  // Switch loaders to debug or release mode
  debug: isDebug,

  devtool: 'source-map',

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.[hash].js'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      __DEV__: isDebug,
    }),
  ],

  // Options affecting the normal modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel!eslint',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: isDebug ? 'style-loader!css-loader!postcss-loader!sass-loader' :
          ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader!sass-loader'),
      },
      {
        test: /\/sprite\/.*\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]',
          prefixize: false,
        }) + '!img-loader?minimize',
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        exclude: [/sprite/],
        loader: 'file-loader?name=img/[name]_[hash].[ext]!img-loader?minimize',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
    ],
  },

  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  postcss() {
    return [
      // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
      // https://github.com/postcss/postcss-media-minmax
      require('postcss-media-minmax')(),
      // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
      // https://github.com/postcss/postcss-custom-selectors
      require('postcss-custom-selectors')(),
      // W3C color() function, e.g. div { background: color(red alpha(90%)); }
      // https://github.com/postcss/postcss-color-function
      require('postcss-color-function')(),
      // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
      // https://github.com/iamvdo/pleeease-filters
      require('pleeease-filters')(),
      // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
      // https://github.com/postcss/postcss-selector-matches
      require('postcss-selector-matches')(),
      // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
      // https://github.com/postcss/postcss-selector-not
      require('postcss-selector-not')(),
      // cssnano takes your nicely formatted CSS and runs it through many focused optimisations
      // http://cssnano.co/
      require('cssnano')({
        comments: { removeAll: true },
      }),
      // Add vendor prefixes to CSS rules using values from caniuse.com
      // https://github.com/postcss/autoprefixer
      require('autoprefixer')({
        browser: SupportedBrowserList,
      }),
    ];
  },

  imagemin: {
    gifsicle: {
      interlaced: false,
    },
    jpegtran: {
      progressive: false,
      arithmetic: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      floyd: 0.5,
      speed: 2,
    },
    svgo: {
      plugins: [{ // https://github.com/svg/svgo#what-it-can-do
        removeTitle: true,
        removeDoctype: true,
        convertPathData: false,
      }],
    },
  },

};

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(new ExtractTextPlugin('css/app.[hash].css')),
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: isVerbose } }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
