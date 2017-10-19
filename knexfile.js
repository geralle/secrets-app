// Update with your config settings.
var dotenv = require('dotenv');
dotenv.load();
const environment = process.env.NODE_ENV || 'development'

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'secretdb'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
