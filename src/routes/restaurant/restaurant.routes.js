const express = require('express');

const RestaurantController = require('../../controllers/RestaurantController');

const routes = express.Router();

routes.post('/', RestaurantController.create);
routes.get('/:id', RestaurantController.show);
routes.get('/', RestaurantController.listAll);

module.exports = routes;