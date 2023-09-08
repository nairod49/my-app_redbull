const express = require('express');
const router = express.Router();
const ResultatCourse = require('../models/resultatCourse'); // Assurez-vous que le chemin du modèle est correct

// Route pour obtenir les résultats de course en fonction de l'année et du grand prix
router.get('/', async (req, res) => {
  try {
    const { annee, grandPrix } = req.query; // Récupérer les paramètres de requête

    // Vérifier si les paramètres de requête sont présents
    if (!annee || !grandPrix) {
      return res.status(400).json({ message: "Les paramètres 'annee' et 'grandPrix' sont obligatoires." });
    }

    // Rechercher les résultats en fonction de l'année et du grand prix
    const resultats = await ResultatCourse.find({ annee, grandPrix });

    if (resultats.length === 0) {
      return res.status(404).json({ message: "Aucun résultat trouvé pour ces critères." });
    }

    res.status(200).json(resultats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la recherche des résultats." });
  }
});

module.exports = router;
