const express = require('express');

const MenuController = require('../../controllers/MenuController');

const routes = express.Router();

routes.post('/', MenuController.create);
routes.get('/:id', MenuController.show);

module.exports = routes;