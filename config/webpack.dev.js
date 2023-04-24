const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [new RefreshWebpackPlugin()],
  devServer: {
    open: false, // dev server 구동 후 브라우저 열기
    hot: true, // webpack의 HMR 기능 활성화
    compress: true, // 모든 항목에 대해 gzip압축 사용
    port: 3005, // server port 설정
    historyApiFallback: true, // 404 에러 발생 시, index.html로 이동.
    liveReload: true, // 파일 변경이 감지되면 페이지를 다시 로드하고 새로고침
    client: {
      progress: false, // 브라우저에서 컴파일 진행률을 백분율로 출력함.
      overlay: true, // 컴파일러 오류나 경고를 브라우저 화면에 오버레이를 표시함.
      logging: "error", // 브라우저 로그 수준을 설정 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        // 1. 작성한 scss를 sass-loader를 통해 컴파일 한다.
        // 2. postcss-loader를 통해 브라우저에 따라 알맞는 css로 컴파일 한다.
        // 3. 컴파일된 css를 css-loader로 읽는다.
        // 4. css-loader로 읽힌 css를 style-loader를 통해 index.html에 삽입한다.
      },
    ],
  },
});
