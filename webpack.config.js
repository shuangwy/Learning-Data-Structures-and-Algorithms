let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // hot: true,
        port: 3000,
        contentBase: './dist',
        open: 'Google Chrome',
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, 'dist', 'manifest.json'),
        // }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        // new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        new webpack.NamedModulesPlugin(),//打印更新的模块路径
        // new webpack.HotModuleReplacementPlugin(), //热更新插件
        // new web
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}