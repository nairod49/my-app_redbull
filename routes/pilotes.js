// pilotes.routes.js
const express = require('express');
const router = express.Router();
const Pilotes = require('../pilotes'); // Importez votre modèle de pilotes

// Route pour obtenir la liste des pilotes
router.get('/', async (req, res) => {
  try {
    // Utilisez la méthode find de Mongoose pour récupérer tous les pilotes
    const pilotes = await Pilotes.find();

    res.status(200).json(pilotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des pilotes." });
  }
});

module.exports = router;
