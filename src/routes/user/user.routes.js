const express = require('express');
const UserController = require('../../controllers/UserController');

const routes = express.Router();

routes.post('/', UserController.create);
routes.get('/:id', UserController.show);
routes.get('/', UserController.listAll);

module.exports = routes;
