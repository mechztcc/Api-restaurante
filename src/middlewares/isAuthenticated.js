const { verify } = require("jsonwebtoken");
const authConfig = require('../config/auth');


class isAuthenticated {

    async execute(req, res, next) {
        const { authorization } = req.headers;

        if(!authorization) {
            return res.json({ error: 'Token Invalid.' });
        }

        try {
            const decodedToken = verify(authorization, authConfig.jwt.secret);
            const { sub } = decodedToken;
            req.user = { id: sub };
            return next();


        } catch (error) {
            return res.json({ error: 'Invalid Token.' });
        }

    }
}

module.exports = new isAuthenticated();