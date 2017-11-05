'use strict';

const path = require( 'path' );

module.exports = {
    entry: path.join( __dirname, 'src', 'app', 'index.js' ),
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'build.js'
    }
};