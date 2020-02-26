const path = require("path");
module.exports = {
    mode: "development",
    entry: {
        index: path.join(__dirname, "../src/client/index.tsx")
    },
    output: {
        path: path.join(__dirname, "../dist/public"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ["babel-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
}