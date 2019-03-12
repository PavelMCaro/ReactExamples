const merge = require('webpack-merge');
const baseConfig = require('./config.base.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        open: true,
        historyApiFallback: true
    },
    optimization:{
        runtimeChunk:true,
        splitChunks:{
            chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    // {
                    //     loader: 'stylelint-custom-processor-loader'
                    // }
                ]
            }
        ]
    },
    mode: 'development',
    plugins: [
        //new BundleAnalyzerPlugin()
    ]
});
