const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://im5devbox.nt-gfw.local:5000/' }));
};
