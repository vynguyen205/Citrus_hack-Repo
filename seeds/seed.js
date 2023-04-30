const sequelize = require('../config/connection');
const { User, Hunt } = require('../models');

const userData = require('./userData.json');
const huntsData = require('./huntsData.json');

const seedDatabase = async () => {
  try {

    await sequelize.sync({ force: true });
    console.log('🤝 Nice! Database is synced 🤝\n');
    
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const hunts of huntsData) {
      await Hunt.create({
        ...hunts,
        id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
    console.log('🗄 Nice! Words are added 🗄');
  
    process.exit(0);

  } catch (err) {
    console.log(err);
    console.log('🚨🚨🚨 SOMETHING WENT WRONG 🚨🚨🚨', err);
  }
};

seedDatabase();