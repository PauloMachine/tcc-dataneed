const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const authConfig = require('../config/AuthConfig');

module.exports = async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).json({ error: 'TOKEN NOT FOUND!' });

    const [, token] = authToken.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;
        return next();
    } catch (err) { return res.status(401).json({ error: 'INVALID TOKEN!' }) }
}