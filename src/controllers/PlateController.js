const Plate = require('../models/Plate');
const Menu = require('../models/Menu');


class PlateController {
    async create(req, res) {
        const { name, description, time, menu_id } = req.body;

        const menuExists = await Menu.findByPk(menu_id);
        if(!menuExists) {
            return res.json({ error: 'Menu not found.' });
        }

        const plate = await Plate.create({ name, description, time, menu_id });
        return res.json(plate);
    }

    async show(req, res) {
        const { id } = req.params;

        const plate = await Plate.findByPk(id);
        return res.json(plate);
    }
}


module.exports = new PlateController();