const userRouter = require('./users/user.routes');
const restricted = require('./restricted');

module.exports = server => {
    server.use('/api', restricted, userRouter);
}
