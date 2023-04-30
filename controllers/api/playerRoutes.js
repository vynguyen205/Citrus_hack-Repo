const router = require('express').Router();
const { Player } = require('../../models');

//This POST route is for creating a new player
router.post('/', async (req, res) => {
    try {
        const playerData = await Player.create(req.body);
    
        req.session.save(() => {
        req.session.player_id = playerData.id;
    
        res.status(200).json(playerData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//GET route for player information
router.get('/:id', async (req, res) => {
    try {
        const playerData = await Player.findByPk(req.params.id);
        
        if (!playerData) {
        res.status(404).json({ message: 'No player found with this id!' });
        return;
        } else {
        res.status(200).json(playerData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//PUT route for updating player information
router.put('/:id', async (req, res) => {
    try {
        const playerData = await Player.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!playerData) {
            res.status(404).json({ message: 'No player found with this id!' });
            return;
        } else {
            res.status(200).json(playerData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE route for deleting player
router.delete('/:id', async (req, res) => {
    try {
        const playerData = await Player.destroy({
            where: {
                id: req.params.id,
            },
        });
        
        if (!playerData) {
            res.status(404).json({ message: 'No player found with this id!' });
            return;
        } else {
            res.status(200).json(playerData);
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;