require('@babel/register');

const UniversalHotReload = require('universal-hot-reload').default;
UniversalHotReload(require('../../webpack/server/webpack.config.server.js'), require('../../webpack.config.js'));
