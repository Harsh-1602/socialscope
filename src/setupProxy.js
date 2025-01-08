const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/lf',
    createProxyMiddleware({
      target: 'https://api.langflow.astra.datastax.com',
      changeOrigin: true,
      secure: false,
      onProxyRes: function (proxyRes) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      onError: function (err, req, res) {
        console.error('Proxy Error:', err);
      }
    })
  );
}; 