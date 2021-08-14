// const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  webpack: (config, { isServer, dev, isWebpack5, isDevFallback }) => {
    // build時にassetからhashを除去
    config.output.filename =
      isServer ? '../[name].js' : `static/chunks/${isDevFallback ? 'fallback/' : ''}[name]${''}.js`
    
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: "local",
            auto: true,
            exportGlobals: true,
            localIdentName: "[name]__[local]--[hash:base64:3]",
          },
        }
      },
      {
        loader: 'postcss-loader',

      }
      ]
    });
    config.plugins.push(

      new MiniCssExtractPlugin({
        filename: "static/chunks/[name].css",
        chunkFilename: "static/chunks/[name].css",
      })
    );
    return config;
  },
};