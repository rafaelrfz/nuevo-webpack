const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './src/principal.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }, 
    /*serve:{
        dev: { publicPath: '/dist/' }
    }*/
    devServer:{
        port: 8081,
        contentBase: "./dist",
        index: 'index.html',
        hot: true
    }
};