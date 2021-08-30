const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: ".env",
});

module.exports = {
  webpack(config, { isServer }) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /.*/,
        contextRegExp: /__tests__/,
      })
    );
    return config;
  },
};
