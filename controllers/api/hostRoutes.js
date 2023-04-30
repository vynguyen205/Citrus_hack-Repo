const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Host } = require('../../models');

//GET route for host information
router.get('/', async (req, res) => {
    try {
        const hostData = await Host.findAll();
        
        if (!hostData) {
        res.status(404).json({ message: 'No Host Found! 🥲' });
        return;
        } else {
        res.status(200).json(hostData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//This POST route is for creating a new host
router.post('/', async (req, res) => {
    try {
        const hostData = await Host.create(req.body);

        // hash the password from 'req.body' and save to hostData
        hostData.password = await bcrypt.hash(req.body.password, 10);
    
        res.status(200).json(hostData);
    } catch (err) {
        res.status(400).json(err);
    }
});


//PUT route for updating host information
router.put('/:id', async (req, res) => {
    try {
        const hostData = await Host.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!hostData) {
            res.status(404).json({ message: 'No Host Found! 🥲' });
            return;
        } else {
            res.status(200).json(hostData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE route for deleting host
router.delete('/:id', async (req, res) => {
    try {
        const hostData = await Host.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!hostData) {
            res.status(404).json({ message: 'No Host Found! 🥲' });
            return;
        } else {
            res.status(200).json(hostData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;