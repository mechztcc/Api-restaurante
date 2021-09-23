const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const Plate = require('../models/Plate');
const Menu = require('../models/Menu');


const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurant.init(connection);
Plate.init(connection);
Menu.init(connection);

Menu.hasMany(Plate, { as: 'plates' });
Plate.belongsTo(Menu, { foreignKey: 'menu_id', as: 'menu' });


module.exports = connection;
