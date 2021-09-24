const Restaurant = require('../models/Restaurant');
const User = require('../models/User');
const Menu = require('../models/Menu');
const Employee = require('../models/Employee');

class RestaurantController {

    async create(req, res) {
        
        const { id } = req.user;

        const { name } = req.body;

        const userExists = await User.findByPk(id);
        if(!userExists) {
            return res.json({ error: 'User not found.' });
        }

        const restaurant = await Restaurant.create({ name, user_id: id });
        return res.json(restaurant);
    }

    async show(req, res) {
        const { id } = req.params;

        const restaurant = await Restaurant.findByPk(id, { include: [{ model: Menu, as: 'menus' }, { model: Employee, as: 'employees' }]});
        return res.json(restaurant);
    }

    async listAll(req, res) {
        const { id } = req.user;
        console.log(id);
        const restaurants = await Restaurant.findAll();
        return res.json(restaurants);
    }

    async listAllByUserId(req, res) {
        const { id } = req.user;
        const restaurants = await Restaurant.findAll({ where: { user_id: id }});

        return res.json(restaurants);
    }

}

module.exports = new RestaurantController();