const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      return config;
    }
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
