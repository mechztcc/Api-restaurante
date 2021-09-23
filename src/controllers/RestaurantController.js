const Restaurant = require('../models/Restaurant');
const User = require('../models/User');


class RestaurantController {

    async create(req, res) {
        const { name, user_id } = req.body;

        const userExists = await User.findByPk(user_id);
        if(!userExists) {
            return res.json({ error: 'User not found.' });
        }

        const restaurant = await Restaurant.create({ name, user_id });
        return res.json(restaurant);
    }

    async show(req, res) {
        const { id } = req.params;

        const restaurant = await Restaurant.findByPk(id);
        return res.json(restaurant);
    }

    async listAll(req, res) {
        
        const restaurants = await Restaurant.findAll();
        return res.json(restaurants);
    }

}

module.exports = new RestaurantController();