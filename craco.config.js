module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Modify output settings to bundle into a single file
      webpackConfig.output.filename = "bundle.js";
      return webpackConfig;
    },
    plugins: [
      // Add HtmlWebpackPlugin configuration to inject bundled JS into HTML
      new (require("html-webpack-plugin"))({
        template: "public/index.html",
        filename: "index.html",
        inject: true,
      }),
    ],
  },
};
