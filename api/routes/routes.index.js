const publicRouters = require('./routes.public');
const privateRoutes = require('./routes.private');

module.exports = server => {
    publicRouters(server);
    privateRoutes(server);
}
