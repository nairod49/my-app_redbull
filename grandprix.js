const mongoose = require('mongoose');

const grandPrixSchema = new mongoose.Schema({
  nom: String,
  dateDebut: Date,
});

const GrandPrix = mongoose.model('GrandPrix', grandPrixSchema, 'GrandPrix');

module.exports = GrandPrix;