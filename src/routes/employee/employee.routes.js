const { Router } = require('express');
const express = require('express');

const EmployeeController = require('../../controllers/EmployeeController');
const isAuthenticated = require('../../middlewares/isAuthenticated');

const routes = express.Router();

routes.post('/', isAuthenticated.execute, EmployeeController.create);
routes.get('/:id', EmployeeController.show);


module.exports = routes;