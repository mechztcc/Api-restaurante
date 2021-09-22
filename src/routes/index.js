const express = require('express');
const routes = express.Router();

const userRoutes = require('./user/user.routes');

routes.use('/users', userRoutes);

module.exports = routes;