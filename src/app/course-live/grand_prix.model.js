const mongoose = require('mongoose');

const grandPrixSchema = new mongoose.Schema({
  nom: String,
  dateDebut: Date, // Champ pour stocker la date et l'heure de début du Grand Prix
  // Autres champs de données du Grand Prix
});

const GrandPrix = mongoose.model('GrandPrix', grandPrixSchema);

module.exports = GrandPrix;