const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hunt extends Model {}

Hunt.init(
  {
    hunt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    num_of_players: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    host_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'host',
        key: 'host_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hunt',
  }
);

module.exports = Hunt;
