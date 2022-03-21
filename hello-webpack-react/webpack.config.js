const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
        
    mode: 'development'

}