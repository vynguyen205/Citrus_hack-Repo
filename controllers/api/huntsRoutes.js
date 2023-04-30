const router = require('express').Router();
const { Hunt, Host } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newHunt = await Hunt.create(req.body);

    res.status(200).json(newHunt);
  } catch (err) {
    res.status(400).json(err);
  }
});

//GET route for all hunt information
router.get('/', async (req, res) => {
  try {
    const newHunt = await Hunt.findAll({
      where: {
        hunt_id: req.session.hunt_id,
      },
    });

    res.status(200).json(newHunt);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const newHunt = await Hunt.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newHunt) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(newHunt);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
