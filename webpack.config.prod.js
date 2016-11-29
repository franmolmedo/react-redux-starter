const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');

const packages = require('./package.json');

const path = require('path');
const outFolder = path.resolve(__dirname, 'build/wwwroot');

const entryPoint = './app/app.js';
const plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
        template: __dirname + '/index.tmpl.html',
        hash: true
    }),
    new webpack.BannerPlugin('franmolmedo'),
    new FaviconPlugin('./react.png'),
    new ExtractTextPlugin('style-bundle-[chunkhash].css', {
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[chunkhash].js', Infinity),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
];

const appFolder = /app/;

const configuration = {
    entry: {
        app: entryPoint,
        vendor: Object.keys(packages.dependencies)
    },
    output: {
        path: outFolder,
        filename: 'app-bundle-[chunkhash].js'
    },
    plugins: plugins,
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint',
            include: appFolder
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            include: appFolder
        }, {
            test: /\.(scss|sass)$/,
            loader: ExtractTextPlugin.extract('style', ['css?modules&importLoaders=1', 'postcss', 'sass']),
            include: appFolder
        }]
    },
    postcss: [autoprefixer]
}

module.exports = configuration;
