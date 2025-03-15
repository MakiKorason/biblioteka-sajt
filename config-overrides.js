const path = require("path-browserify");
const buffer = require("buffer");
const stream = require("stream-browserify");
const util = require("util");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "buffer": require.resolve("buffer/"),
    "stream": require.resolve("stream-browserify"),
    "util": require.resolve("util/")
  };
  return config;
};
