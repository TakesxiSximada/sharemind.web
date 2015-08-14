// -*- coding: utf-8 -*-

module.exports = {
    entry: './src/main.js',
    output: {
        path: './build/',
        publicPath: '/build/',
        filename: 'pack.js',
    },
    module: {
        loaders: [
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /\.html$/, loader: 'html'},
        ]
    }
};
