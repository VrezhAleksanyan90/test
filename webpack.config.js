const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const PLUGINS = [
    new htmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html')
})];

const LOADERS = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    },
    {
        test: /\.png|jpe?g|gif$/,
        exclude: /node_modules/,
        use: ['url-loader']
    }
]

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: PLUGINS,
    module: {
        rules: LOADERS
    },
    mode: 'development'
}