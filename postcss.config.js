module.exports = {
  parser: "postcss-scss",
  plugins: [require("autoprefixer"), require("postcss-fail-on-warn")],
};
