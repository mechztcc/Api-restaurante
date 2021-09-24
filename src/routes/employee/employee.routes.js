const { Router } = require('express');
const express = require('express');

const EmployeeController = require('../../controllers/EmployeeController');

const routes = express.Router();

routes.post('/', EmployeeController.create);
routes.get('/:id', EmployeeController.show);


module.exports = routes;