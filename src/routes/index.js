const express = require('express');
const routes = express.Router();

const userRoutes = require('./user/user.routes');
const authRoutes = require('../routes/user/auth.routes');

routes.use('/users', userRoutes);
routes.use('/session', authRoutes);

module.exports = routes;