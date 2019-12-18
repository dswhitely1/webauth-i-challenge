const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes/routes.index');
const sessions = require('express-session');
const KnexSessionStore = require('connect-session-knex')(sessions);
const knex = require('../data/db.config');

const server = express();
const sessionConfiguration = {
    name: 'don',
    secret: 'A big Secret',
    resave: false,
    saveUninitialized: true,

    store: new KnexSessionStore({
        knex,
        createTable: true,
        clearInterval: 1000 * 60,
        sidfieldname: "sid",
        tablename: "sessions"
    }),

    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true
    },
};

middleware(server);
server.use(sessions(sessionConfiguration));
routes(server);

module.exports = server;
