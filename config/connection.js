const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: process.env.SQL_PORT || 8889,
      }
    );

module.exports = sequelize;
