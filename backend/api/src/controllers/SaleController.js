const SaleSchema = require("../models/Sale");

module.exports = {
  async find(req, res) {
    const Sale = await SaleSchema.find();
    return res.json(Sale);
  }
};
