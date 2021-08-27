const { Pool } = require('pg');

module.exports.dbPool = new Pool({
  user: 'nodeDBUser',
  host: 'localhost',
  database: 'cargildev',
  password: '1234',
  port: 5432,
});