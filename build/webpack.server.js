const path = require("path");
// 不打包node原生api
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    target: "node", // server 端要加target 
    entry: {
        index: path.join(__dirname, "../src/server/app.tsx")
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ["babel-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", '.tsx', '.js', 'json']
    },
    externals: [nodeExternals()]
}