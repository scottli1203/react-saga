let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:  {
        vendor: ['react','react-dom'],
        main: __dirname + "/src/main.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].[chunkhash].js"
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase:'./public',
        inline: true,
        port: 8888,
        clientLogLevel: "warning",
        historyApiFallback: true,
        headers: {
            'apiKey':'web'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react','stage-0']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            //处理bootstrap 里面的字体文件和图片
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','mainfest'],
            minChunks: function (module) {
                // 该配置假定你引入的 vendor 存在于 node_modules 目录中
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html'
        })
    ]
};
