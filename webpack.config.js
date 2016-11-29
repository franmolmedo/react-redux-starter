const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const path = require('path');
const outFolder = path.resolve(__dirname, './wwwroot');

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
    new AddAssetHtmlPlugin({ filepath: require.resolve('./dll/vendor.dll.js') }),
    new webpack.DllReferencePlugin({
        context: path.join(__dirname, 'app'),
        manifest: require('./dll/vendor-manifest.json')
    }),
    new ExtractTextPlugin('style-bundle-[hash].css', {
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
];

const appFolder = /app/;
const debugPort = 3000;

const configuration = {
    devtool: 'source-map',
    debug: true,
    entry: {
        app: ['webpack-dev-server/client?http://localhost:' + debugPort + '/',
            'webpack/hot/only-dev-server', entryPoint
        ]
    },
    output: {
        path: outFolder,
        filename: 'app-bundle-[hash].js'
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
            include: appFolder,
            cacheDirectory: true
        }, {
            test: /\.(scss|sass)$/,
            loaders: ['style', 'css?modules&importLoaders=1', 'postcss', 'sass'],
            include: appFolder
        }]
    },
    postcss: [autoprefixer],
    debugPort: debugPort
}

module.exports = configuration;
