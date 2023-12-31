const CopyPlugin = require("copy-webpack-plugin");

const { resolve } = require( 'path' )

module.exports = {
    entry: './src/plugin.ts',
    output: {
        filename: 'plugin.js',
        path: resolve( __dirname, 'dist' )
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_module/,
                use: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto', // Required to handle JSON files properly
            },
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    plugins: [
    new CopyPlugin({
        patterns: [
            { from: "src/manifest.json" },
        ],
    }),
    ],
    target: 'node',
    mode: 'production'
}
