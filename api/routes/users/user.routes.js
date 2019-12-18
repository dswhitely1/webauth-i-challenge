const userRouter = require('express').Router();
const Users = require('../../../data/models/user.model');

async function getUsers(req, res) {
    try {
        const users = await Users.find();
        res.json(users);
    } catch(error) {
        res.status(500).json(error);
    }
}

userRouter.get('/users', getUsers);

module.exports = userRouter;
