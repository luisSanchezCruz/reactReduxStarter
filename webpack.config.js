const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
        entry: './src/index.js', 
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename : 'main.js'
        },
        module: {
            rules:[
                {   
                    test:/\.js$/, 
                    exclude: /node_modules/,
                    use: {
                        loader:'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        } 
                    }
                },{
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        {loader:'style-loader'},
                        {loader:'css-loader'}
                    ]
                },
                {
                    test: /.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {loader:'style-loader'},
                        {loader:'css-loader'},
                        {loader:'sass-loader'}
                    ]
                },{
                    test: /.(png|jpg|gif)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
                minify: true
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port:9000
        },
        mode:'development'
}