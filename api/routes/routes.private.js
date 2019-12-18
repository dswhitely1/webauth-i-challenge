const userRouter = require('./users/user.routes');
const restricted = require('./restricted');
const allowCors = require('./set-headers');

module.exports = server => {
    server.use('/api', restricted, userRouter);
}
