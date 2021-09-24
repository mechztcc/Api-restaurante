const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');
const Plate = require('../models/Plate');

class MenuController {
    async create(req, res) {
        const { name, restaurant_id } = req.body;

        const restaurantExists = await Restaurant.findByPk(restaurant_id);
        if(!restaurantExists) {
            return res.json({ error: 'Restaurant not found.' });
        }

        const menu = await Menu.create({ name, restaurant_id });
        return res.json(menu);

    }

    async show(req, res) {
        const { id } = req.params;

        const menu = await Menu.findByPk(id, { include: [{ model: Plate, as: 'plates' }]});
        return res.json(menu);
    }
}

module.exports = new MenuController();