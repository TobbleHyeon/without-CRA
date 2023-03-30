const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development", // "production"
  devServer: {
    host: "localhost",
    port: port,
    open: true, // 서버를 실행했을 때 자동으로 브라우저를 열어주는 옵션.
    historyApiFallback: true, // 브라우저에 URL을 변경할 수 있도록 도와주는 옵션.
  },
  entry: {
    app: path.join(__dirname, "index.tsx"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    // 번들링과정에 사용할 규칙을 설정.
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 웹팩 번들과정에 적용할 플러그인을 설정.
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
