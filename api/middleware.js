const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

module.exports = server => {
    server.use(helmet());
    server.use(express.urlencoded({extended: true}));
    server.use(express.json());
    server.use(cors({
        origin: true,
        credentials: true
    }));
    server.use(morgan('dev'));
};
