const { createProxyMiddleware } = require('http-proxy-middleware');
// not necessary yet
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://gateway.marvel.com/v1/public',
      changeOrigin: true,
      logLevel: 'info',
      pathRewrite: {
        '/api': '',
      },
    })
  );
};
