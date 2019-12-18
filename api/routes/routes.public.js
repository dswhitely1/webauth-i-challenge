const authRoutes = require('./auth/auth.routes');

module.exports = server => {
    server.use('/api', authRoutes);
}
