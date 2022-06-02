const UserSchema = require('../models/User');

module.exports = {
    async updateOrCreate(user) {
      try {
        const findUser = await UserSchema.findOne({ nome: user.NOME });
        if (!findUser)
          return await UserSchema.create({ nome: user.NOME, senha: user.SENHA });
      } catch (err) {
        console.log('USER UPDATE OR CREATE REQUEST: ', err);
        return { error: err };
      }
    }
};
