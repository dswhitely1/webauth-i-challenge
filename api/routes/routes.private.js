const userRouter = require('./users/user.routes');

module.exports = server => {
    server.use('/api', userRouter);
}
