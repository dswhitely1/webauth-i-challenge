const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../../data/models/user.model');

async function register(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const [newUser] = await Users.add(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function login(req, res) {
    try {
        const [user] = Users.findBy({username: req.body.username});
        if (bcrypt.compareSync(user.password, req.body.password)) {
            const {id, username, role_id} = user;
            res.json({id, username, role_id})
        } else {
            res.status(401).json({error: "Invalid Username and/or Password"})
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function validateRegister(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({error: "Username, Password is required"})
    }
    const user = await Users.findBy({username: req.body.username});
    if (user.length > 0) {
        return res.status(400).json({error: "Username is already registered"});
    }
    if (!req.body.role_id) {
        req.body.role_id = 2;
    }
    next();
}

async function validateLogin(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({error: "Username, Password is required"})
    }
    const user = await Users.findBy({username: req.body.username});
    if (user.length === 0) {
        return res.status(404).json({error: "Username is not found"})
    }
    next()
}

authRouter.post('/login', validateLogin, login).post('/register', validateRegister, register);

module.exports = authRouter;
