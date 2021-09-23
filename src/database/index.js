const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Restaurant = require('../models/Restaurant');


const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurant.init(connection);

module.exports = connection;
