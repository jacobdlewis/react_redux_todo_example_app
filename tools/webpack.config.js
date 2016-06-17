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
const extend = require('extend');
const pkg = require('../package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const SVGOOpts = { // https://github.com/svg/svgo#what-it-can-do
  removeTitle: true,
  removeDoctype: true,
};
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
  context: path.join(__dirname, '..', 'src', 'client'),

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
    path: path.join(__dirname, '..', 'build'),
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
    new SvgStore(
      path.join('img', 'sprite', '*.svg'),
      '../img',
      {
        name: '[hash].sprite.svg',
        prefix: '',
        //chunk: 'vendor', // -> issue: https://github.com/mrsum/webpack-svgstore-plugin/issues/95
        svgoOptions: { plugins: [SVGOOpts] },
      }
    ),
  ],

  // Options affecting the normal modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loader: isDebug ? 'style-loader!css-loader!postcss-loader!sass-loader' :
          ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader!sass-loader'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
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

};

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(new ExtractTextPlugin('css/app.[hash].css')),
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: isVerbose } }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
