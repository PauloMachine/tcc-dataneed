const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    mes: { type: String, required: true },
    total: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sale", SaleSchema);
