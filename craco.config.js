/* eslint-disable @typescript-eslint/no-var-requires */
/* craco.config.js */
const autoprefixer = require('autoprefixer');
const CracoAlias = require("craco-alias");
const CracoScopedCss = require('craco-plugin-scoped-css');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.paths.json"
      }
    },
    {
      plugin: CracoScopedCss,
    },
  ],
  style: {
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
  },
};
