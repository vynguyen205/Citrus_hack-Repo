const Host = require('./Host');
const Hunt = require('./Hunt');
const Player = require('./Player');

Host.hasMany(Hunt, {
  onDelete: 'CASCADE',
});

Hunt.belongsTo(Host);

// Player.hasOne()

module.exports = { Host, Hunt, Player };
