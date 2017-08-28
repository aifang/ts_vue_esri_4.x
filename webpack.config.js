var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');



module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ],
        // noParse: /esri\/map/
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js', 'html'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        contentBase: "./dist"
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

/* 生产环境的配置 */
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.BannerPlugin('This file is created by FH')
    ])
}

// //拷贝esri库
// fs.stat('./dist/libEsri', function (err, stat) {
//     if (err == null) {
//         if (stat.isDirectory()) {
//             console.log('文件夹存在');
//         } else if (stat.isFile()) {
//             console.log('文件存在');
//         } else {
//             console.log('路径存在，但既不是文件，也不是文件夹');
//             //输出路径对象信息
//             console.log(stat);
//         }
//     } else if (err.code == 'ENOENT') {
//         console.log(err.name);
//         console.log('路径不存在');
//     } else {
//         console.log('错误：' + err);
//     }
// });
