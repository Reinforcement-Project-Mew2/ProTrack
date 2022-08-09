const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = { 
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname,'dist'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                },
                {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env', '@babel/preset-react']
                //     }
                // }
            {
                test:/\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', ".css", ".scss"],
      },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ]
}