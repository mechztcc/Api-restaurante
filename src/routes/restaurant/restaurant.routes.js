const express = require('express');

const RestaurantController = require('../../controllers/RestaurantController');
const isAuthenticated = require('../../middlewares/isAuthenticated');

const routes = express.Router();

routes.post('/', isAuthenticated.execute, RestaurantController.create);
routes.get('/:id', RestaurantController.show);
routes.get('/', isAuthenticated.execute, RestaurantController.listAllByUserId);

module.exports = routes;