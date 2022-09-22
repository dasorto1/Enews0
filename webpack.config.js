

const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  stats: {
    warnings: false
},
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {

    alias: {

      "react-native": "react-native-web",
      myApp: path.resolve(__dirname, 'src')
    },

    extensions: [".web.js", ".js"]

  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9000
  },
};