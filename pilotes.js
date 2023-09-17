// pilote.model.ts
const mongoose = require('mongoose');

const piloteSchema = new mongoose.Schema({
    _id: String,
    nom: String,
    nationalite: String,
    date_de_naissance: String,
    equipe_actuelle: String,
    palmares: [{
      annee: Number,
      championnat: String,
      victoires: Number,
      podiums: Number,
    }]
  })
  
  
  const Pilotes = mongoose.model('Pilotes', piloteSchema);
  
  module.exports = Pilotes;
  