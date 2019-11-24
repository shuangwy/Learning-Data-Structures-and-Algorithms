let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2,//引用两次就抽离到公共部分
                },
                vendor: { //抽离第三方的文件
                    priority: 1, //增加权重
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2

                }
            }

        }
    },
    mode: 'production',
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, 'dist', 'manifest.json'),
        // }),
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}