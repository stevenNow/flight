module.exports = {
  css: {
    loaderOptions: {
      less: {
        'javascriptEnabled': true
      }
    }
  },
  publicPath: "/",
  devServer: {
    port: 8080,
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
