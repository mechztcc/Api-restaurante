const User = require('../models/User');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const authConfig = require('../config/auth');

class AuthController {
    async auth(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }});
        if(!user) {
            return res.status(401).json({ error: 'Email or Password incorrected.' });
        }

        const passwordConfirmed = await compare(password, user.password);

        if(!passwordConfirmed) {
            return res.status(401).json({ error: 'Email or Password incorrected. '});
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id.toString(),
            expiresIn: authConfig.jwt.expiresIn
        });

        return res.json({ user, token });

    }
}

module.exports = new AuthController();