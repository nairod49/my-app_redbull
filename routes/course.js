const express = require('express');
const router = express.Router();
const GrandPrix = require('../grandprix'); 
const { nodeModuleNameResolver } = require('typescript');

router.get('/', async (req, res) => {
    try {
      
      const pilotes = await GrandPrix.find();
  
      res.status(200).json(pilotes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des grand prix." });
    }
  });

// Route pour obtenir la date et l'heure de début du Grand Prix en cours
router.get('/debut-grand-prix-en-cours', async (req, res) => {
  try {
    
    const dateActuelle = new Date();
    const grandPrixEnCours = await GrandPrix.findOne({ dateDebut: { $gte: dateActuelle } })
      .sort('dateDebut')
      .limit(1);

    if (!grandPrixEnCours) {
      return res.status(404).json({ message: "Aucun Grand Prix en cours n'a été trouvé." });
    }

    // Renvoyez la date et l'heure de début du Grand Prix en cours
    res.status(200).json({ dateDebut: grandPrixEnCours.dateDebut });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du Grand Prix en cours." });
  }
});

router.get('/nom',async (req, res)=>{
  try{
    const nom = await GrandPrix.distinct('nom')
    if (!nodeModuleNameResolver) {
      return res.status(404).json({ message: "Aucun Grand Prix en cours n'a été trouvé." });
    }
    res.status(200).json({ nom });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du Grand Prix en cours." });
    }
  });

module.exports = router;
