const path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: 'index',
    output: {
        filename: 'js/[name].js?[hash:8]',
        //publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:57092/',
                changeOrigin: true,
            },
        },
    },
    resolve:{
        modules: [
            path.resolve('src'),
            path.resolve('src/images'),
            path.resolve('src/components'),
            path.resolve('src/views'),
            path.resolve('node_modules')
        ],
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                     
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg|woff|woff2|ttf|eot|html)$/,
                loader: 'file-loader',
                include: path.resolve('src/assets'),
                options: {
                  name: '[path][name].[ext]?[hash:8]',
                  publicPath: 'assets',
                  emitFile: true

                }
            }, 
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/,
                include: path.resolve('src/images'),
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3000,
                            name:'[path][name].[ext]?[hash:8]',
                           
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            },
        ]
    },watch: true
    
};