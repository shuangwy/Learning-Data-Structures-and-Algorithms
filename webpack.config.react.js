let path = require('path')
let webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        // test: './src/test.js',
        react: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]',
        libraryTarget: 'var'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        }),
       
    ]
}