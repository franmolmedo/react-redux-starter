const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    inline: true,
    stats: 'minimal',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}).listen(config.debugPort, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at localhost: ${config.debugPort}`);
});
