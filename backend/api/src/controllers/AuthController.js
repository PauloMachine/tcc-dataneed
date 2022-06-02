const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/AuthConfig');

module.exports = {
    async find(req, res) {
        const { nome, senha } = req.body;

        let user = await User.findOne({ nome });

        if (!user) return res.status(400).send({ error: 'USER NOT FOUND!' });
        if (!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: 'INVALID PASSWORD!' });
        
        user.password = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 })
        return res.json({ user, token });
    }
}