const express = require('express');
const routes = express.Router();

const userRoutes = require('./user/user.routes');
const authRoutes = require('../routes/user/auth.routes');
const restaurantRoutes = require('../routes/restaurant/restaurant.routes');


routes.use('/users', userRoutes);
routes.use('/sessions', authRoutes);
routes.use('/restaurants', restaurantRoutes);

module.exports = routes;