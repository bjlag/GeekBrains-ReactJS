'use strict';

const path = require( 'path' );

module.exports = {
    entry: path.join( __dirname, 'src', 'app', 'App.js' ),
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'build.js',
        library: 'lib'
    },

    devtool: 'cheap-inline-module-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};