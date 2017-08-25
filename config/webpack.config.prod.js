'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var paths = require('./paths');
var getClientEnvironment = require('./env');


var publicPath = paths.servedPath;
var shouldUseRelativeAssetPaths = publicPath === './';

var publicUrl = publicPath.slice(0, -1);
var env = getClientEnvironment(publicUrl);

var postCSSConfig = require('./postcss.config');

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

const cssFilename = 'css/[name].css';

// const extractTextPluginOptions = shouldUseRelativeAssetPaths
//   ? { publicPath: Array(cssFilename.split('/').length).join('../') }
//   : undefined;

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: [
    require.resolve('./polyfills'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    filename: 'js/main.js',
    publicPath: publicPath
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      'react-native': 'react-native-web'
    },
    root: [
      paths.appSrc
    ]
  },

  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc
      }
    ],
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/,
          /\.(jpg|png|gif|svg|eot|ttf|woff|woff2|otf)(\?.*)?$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: [paths.appNodeModules],
        loader: ExtractTextPlugin.extract(
          'style',
          'css?-autoprefixer&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        )
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|svg)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
        query: {
          name: 'media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)(\?.*)?$/,
        // Loader output: '../media/[name].[ext]'
        // This will let us back out of CSS
        // and load our local fonts
        loader: 'file?publicPath=../&name=media/[name].[ext]'
      }
    ]
  },

  postcss: function() {
    return postCSSConfig;
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: paths.appHtml,
    }),

    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      screw_ie8: true,
      mangle: false,
    }),
    new ExtractTextPlugin(cssFilename),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
