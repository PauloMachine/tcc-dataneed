const path = require('path');

const ConnectionFirebird = {
  host: '127.0.0.1',
  port: 3050,
  database: path.resolve() + '/src/database/LEGADO.FDB',
  user: 'SYSDBA',
  password: 'masterkey'
};

module.exports = ConnectionFirebird