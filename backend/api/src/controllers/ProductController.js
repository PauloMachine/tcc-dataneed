const ProductSchema = require("../models/Product");

module.exports = {
  async find(req, res) {
    const Product = await ProductSchema.find();
    return res.json(Product);
  }
};
