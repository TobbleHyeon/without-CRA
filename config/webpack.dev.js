const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: false, // dev server 구동 후 브라우저 열기
    hot: true, // webpack의 HMR 기능 활성화
    compress: true, // 모든 항목에 대해 gzip압축 사용
    port: 3005, // server port 설정
    historyApiFallback: true,
    liveReload: true, // 파일 변경이 감지되면 페이지를 다시 로드하고 새로고침
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
