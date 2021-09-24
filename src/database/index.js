const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const Plate = require('../models/Plate');
const Menu = require('../models/Menu');
const Employee = require('../models/Employee');


const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurant.init(connection);
Plate.init(connection);
Menu.init(connection);
Employee.init(connection);

Restaurant.hasMany(Menu, { as: 'menus'})
Menu.belongsTo(Restaurant, { foreignKey: 'restaurant_id', as: 'restaurants' });

Menu.hasMany(Plate, { as: 'plates' });
Plate.belongsTo(Menu, { foreignKey: 'menu_id', as: 'menu' });

Restaurant.hasMany(Employee, { as: 'employees' });
Employee.belongsTo(Restaurant, { foreignKey: 'restaurant_id', as: 'restaurants' });

module.exports = connection;
