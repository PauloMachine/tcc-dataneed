const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    senha: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
