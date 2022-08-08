const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = { 
    entry: "./src/index.js",
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
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test:/\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ]
}