const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserController {

    async create(req, res) {
        const { name, email, password } = req.body;

        const emailExists = await User.findOne({ where: { email }})

        if(emailExists) {
            return res.json({ message: 'Email already in use '});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword });
        return res.json(user);
    }

    async show(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);
        if(!user) {
            return res.json({ message: 'User not found.' });
        }
        return res.json(user);
    }

    async listAll(req, res) {
        
        const users = await User.findAll();
        return res.json(users);
    }



}


module.exports = new UserController();