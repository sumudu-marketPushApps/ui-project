const webpack = require("webpack");
module.exports = {
  css: {
    extract: false,
    // modules: true,
    loaderOptions: {
      scss: {
        // additionalData: `@import "~@/styles/global.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.shadowMode = true;
        return options;
      });
    config.module
      .rule("css")
      .oneOf("vue")
      .use("vue-style-loader")
      .tap((options) => {
        options.shadowMode = true;
        return options;
      });
    config.module
      .rule("scss")
      .oneOf("vue")
      .use("vue-style-loader")
      .tap((options) => {
        options.shadowMode = true;
        return options;
      });
    // enableShadowCss(config);
  },
};