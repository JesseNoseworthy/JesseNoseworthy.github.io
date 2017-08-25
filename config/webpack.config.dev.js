var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');
var postCSSConfig = require('./postcss.config');

var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'js/bundle.js',
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
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
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
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2|otf)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'media/[name].[ext]'
        }
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
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};