const express = require('express');
const router = express.Router();
const ResultatCourse = require('../resultatsCourse.js');

// Route pour obtenir les résultats de course en fonction de l'année et du grand prix
router.get('/', async (req, res) => {
  try {
    const { annee, grandPrix } = req.query; 

    // Vérifier si les paramètres de requête sont présents
    if (!annee || !grandPrix) {
      return res.status(400).json({ message: "Les paramètres 'annee' et 'grandPrix' sont obligatoires." });
    }

    // Rechercher les résultats en fonction de l'année et du grand prix
    let query ={ annee: req.query.annee.toString, grandPrix: req.query.grandPrix.toString };
    const resultats = await ResultatCourse.find(query);

    if (resultats.length === 0) {
      return res.status(404).json({ message: "Aucun résultat trouvé pour ces critères." });
    }

    res.status(200).json(resultats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la recherche des résultats." });
  }
});

router.get('/annees', async (req, res) => {
  try {
    const annees = await ResultatCourse.distinct('annee');
    res.status(200).json(annees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des années disponibles." });
  }
});

// Route pour obtenir la liste des Grand Prix disponibles
router.get('/grandsprix', async (req, res) => {
  try {
    const grandPrixList = await ResultatCourse.distinct('nom_grand_prix');
    if (grandPrixList.length === 0) {
      return res.status(404).json({ message: "Aucun Grand Prix trouvé." });
    }

    res.status(200).json(grandPrixList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des Grand Prix." });
  }
});

module.exports = router;
