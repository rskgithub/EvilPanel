const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: {
        app: ['webpack-hot-middleware/client', './app/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        contentBase: './app',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders:
            [
                {
                    test: /\.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['env', 'stage-1', 'react']
                    }
                }
            ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};