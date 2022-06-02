const Firebird = require('node-firebird');
const Conexao = require('../database/Firebird');
const UserController = require('./UserController');
const SaleController = require('./SaleController');
const ProductController = require('./ProductController');

module.exports = {
  async findUsers() {
    await Firebird.attach(Conexao, async (err, connection) => {
      try {
          connection.query("SELECT NOME, SENHA FROM USERS WHERE PERFIL = 1",
            async (err, result) => {
              try {
              return await result.map(async (user) => { 
                  UserController.updateOrCreate(user)
              });
            } catch (err) {
              console.log('FIREBIRD QUERY USERS REQUEST: ', err);
              return { error: err };
            }
          }
        )
      } catch (err) {
        console.log('FIREBIRD CONNECTION REQUEST: ', err);
        return { error: err };
      }
    });
  },

    async findSales() {
        await Firebird.attach(Conexao, async (err, connection) => {
            try {
                connection.query("SELECT MES, SUM(VALOR * QUANTIDADE) AS TOTAL FROM SALES GROUP BY MES",
                    async (err, result) => {
                        try {
                            return await result.map(async (sale) => { SaleController.updateOrCreate(sale) });
                        } catch (err) {
                            console.log('FIREBIRD QUERY SALES REQUEST: ', err);
                            return { error: err };
                        }
                    }
                )
            } catch (err) {
                console.log('FIREBIRD CONNECTION REQUEST: ', err);
                return { error: err };
            }
        });
    },

    async findProducts() {
        await Firebird.attach(Conexao, async (err, connection) => {
            try {
                connection.query("SELECT FIRST 3 COUNT(SALES.IDPRODUTO) AS QTDVENDA, PRODUCTS.NOME FROM SALES LEFT JOIN PRODUCTS ON PRODUCTS.ID = SALES.IDPRODUTO GROUP BY NOME ORDER BY QTDVENDA DESC",
                    async (err, result) => {
                        try {
                            return await result.map(async (product) => { ProductController.updateOrCreate(product) });
                        } catch (err) {
                            console.log('FIREBIRD QUERY PRODUCTS REQUEST: ', err);
                            return { error: err };
                        }
                    }
                )
            } catch (err) {
                console.log('FIREBIRD CONNECTION REQUEST: ', err);
                return { error: err };
            }
        });
    }
}
