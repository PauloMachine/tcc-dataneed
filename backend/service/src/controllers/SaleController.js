const SaleSchema = require('../models/Sale');

module.exports = {
    async updateOrCreate(sale) {
      const filter = { mes: sale.MES };
      const update = { total: sale.TOTAL };
      try {
        const findSale = await SaleSchema.findOne(filter);
        if (findSale) return await SaleSchema.updateOne(filter, update);
        return await SaleSchema.create({ mes: sale.MES, total: sale.TOTAL });
      } catch (err) {
        console.log('SALE UPDATE OR CREATE REQUEST: ', err);
        return { error: err };
      }
    }
};
