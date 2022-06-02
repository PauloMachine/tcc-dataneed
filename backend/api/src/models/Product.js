const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    qtdvenda: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
