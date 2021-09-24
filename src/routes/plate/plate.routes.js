const express = require('express');

const PlateController = require('../../controllers/PlateController');


const routes = express.Router();

routes.post('/', PlateController.create);
routes.get('/:id', PlateController.show);


module.exports = routes;