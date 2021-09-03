/* eslint-disable @typescript-eslint/no-var-requires */
/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@definitions': path.resolve(__dirname, 'src/definitions'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
};
