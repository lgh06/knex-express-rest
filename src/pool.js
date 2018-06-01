var knex = require('knex')({
  debug: true,
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'knex_test'
  },
  pool: {
    min: 1,
    max: 9
  }
});

module.exports = knex;
