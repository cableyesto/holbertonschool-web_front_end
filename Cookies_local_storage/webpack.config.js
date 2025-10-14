const path = require('path');

module.exports = {
  entry: './src/index.js', // required, even if empty
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname), // serve files from root
      watch: true,                        // 👈 watch static files like HTML
    },
    watchFiles: ['*.html'],               // 👈 also watch HTML files manually
    liveReload: true,                     // 👈 full page reload on change
    open: true,                           // 👈 opens browser automatically
    port: 8083,
    host: '127.0.0.1',
  },
  mode: 'development',
  target: 'web'
};

