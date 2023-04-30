const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
    {
      id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'player',
    }
  );
  
  module.exports = Player;