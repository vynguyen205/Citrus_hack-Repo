const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Host extends Model {}

Host.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'user',
            key: 'id',
        },
      },
      num_of_hunts: {
        type: DataTypes.INTEGER,
        allowNULL: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'host',
    }
  );
  
  module.exports = Host;