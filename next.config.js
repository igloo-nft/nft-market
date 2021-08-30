const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
