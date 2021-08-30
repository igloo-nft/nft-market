const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
