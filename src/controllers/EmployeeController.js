const Employee = require('../models/Employee');
const Restaurant = require('../models/Restaurant');

class EmployeeController {
    async create(req, res) {
        const { name, login, password, cpf, phone, pix, restaurant_id } = req.body;

        const restaurantExists = await Restaurant.findByPk(restaurant_id);
        if(!restaurantExists) {
            return res.json({ error: 'Restaurant not found.' });
        }

        const employee = await Employee.create({ name, login, password, cpf, phone, pix, restaurant_id });
        return res.json(employee);
    }

    async show(req, res) {
        const { id } = req.params;
     
        const employee = await Employee.findByPk(id);
        return res.json(employee);
    }
}


module.exports = new EmployeeController();