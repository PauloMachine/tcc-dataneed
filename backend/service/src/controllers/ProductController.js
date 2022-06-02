const ProductSchema = require('../models/Product');

module.exports = {
    async updateOrCreate(product) {
      try {
        await ProductSchema.deleteMany({});
        await ProductSchema.create({ qtdvenda: product.QTDVENDA, nome: product.NOME });
      } catch (err) {
        console.log('PRODUCT UPDATE OR CREATE REQUEST: ', err);
        return { error: err };
      }
    }
};
