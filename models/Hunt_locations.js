const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hunt_location extends Model {}

Hunt_location.init(
  {
    huntLocation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hunt_location',
  }
);

module.exports = Hunt_location;
