const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    target: 'node',
    entry: {
        openapiGenerator: "./src/openapiGenerator/index.ts",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]/[name].js',
        library: 'kherp/swagger-codegen-openapi',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    externals: {
        "child_process": "child_process"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/openapiGenerator/index.ts", to: "./openapiGenerator/index.js", },
                { from: "./src/openapiGenerator/templates/**/*", to: "[path][name].[ext]", 
                transformPath(targetPath) {
                    const pathSplitter = targetPath.indexOf("\\") > -1 ? "\\" : "/";
                    const pathArray = targetPath.split(pathSplitter);
                    pathArray.splice(0, 1);
                    return pathArray.join(pathSplitter);
                },},
            ]
        }),
        new CaseSensitivePathsPlugin()
    ],
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", exclude: [/node_modules/, /\.(test)\.ts$/] }
        ]
    },
    node: {
        console: false,
        global: true,
        process: true,
        Buffer: false,
        setImmediate: false
    }
};
