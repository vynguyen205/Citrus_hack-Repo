const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
    {
      play_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      host_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'host',
          key: 'id',
        },
      },
      code: {
        type: DataTypes.INTEGER,
        references: {
          model: 'hunt',
          key: 'code',
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