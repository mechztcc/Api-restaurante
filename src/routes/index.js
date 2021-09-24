const express = require('express');
const routes = express.Router();

const userRoutes = require('./user/user.routes');
const authRoutes = require('../routes/user/auth.routes');
const restaurantRoutes = require('../routes/restaurant/restaurant.routes');
const plateRoutes = require('../routes/plate/plate.routes');
const menuRoutes = require('./menu/menu.routes');


routes.use('/users', userRoutes);
routes.use('/sessions', authRoutes);
routes.use('/restaurants', restaurantRoutes);
routes.use('/plates', plateRoutes);
routes.use('/menus', menuRoutes);

module.exports = routes;