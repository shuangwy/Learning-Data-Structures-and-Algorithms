let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json'),
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    ],
    module: {
        noParse: /jquery/,
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}