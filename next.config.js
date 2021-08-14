const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: "build",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, "css-loader",
        {
          loader: 'postcss-loader',
        },
      ]
    });
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
        chunkFilename: "static/css/.css",
        ignoreOrder: true,
      })
    );
    return config;
  },
};
