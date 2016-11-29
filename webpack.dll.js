const webpack = require('webpack');
const path = require('path');

const packages = require('./package.json');

const configuration = {
    entry: {
        vendor: Object.keys(packages.dependencies)
    },
    output: {
        path: __dirname + '/dll',
        filename: '[name].dll.js',
        library: '[name]'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dll' , '[name]-manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, 'app')
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, 'app'),
        modulesDirectories: ['node_modules']
    }
};

module.exports = configuration;
