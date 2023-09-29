const express = require('express');
const router = express.Router();
const Classement = require('../classement');

// Route pour obtenir le classement en direct
router.get('/', async (req, res) => {
  try {
    const classement = await Classement.find().sort('temps'); // Tri par temps croissant
    res.status(200).json(classement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du classement en direct." });
  }
});

module.exports = router;
