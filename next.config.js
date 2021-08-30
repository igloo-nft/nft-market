const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  reactStrictMode: true,
  webpack5: false,
  webpack(config, { isServer }) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
