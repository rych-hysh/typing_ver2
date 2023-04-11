const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        bundled: './src/script.ts'
    },  
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'  
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
   module: {
        rules: [
            {
              test:/\.ts$/,loader:'ts-loader'
            }
        ]
    },
		plugins: [
			new HtmlWebpackPlugin({
				template: "./index.html",
			}),
		],
}