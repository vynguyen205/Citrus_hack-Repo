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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'host',
        key: 'id',
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
