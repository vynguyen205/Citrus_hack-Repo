const router = require('express').Router();
const userRoutes = require('./userRoutes');
const huntsRoutes = require('./huntsRoutes');
const playerRoutes = require('./playerRoutes');
const hostRoutes = require('./hostRoutes');

router.use('/users', userRoutes);
router.use('/hunts', huntsRoutes);
router.use('/player', playerRoutes);
router.use('/host', hostRoutes);

module.exports = router;
