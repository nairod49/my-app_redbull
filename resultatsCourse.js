// resultatCourse.js
const mongoose = require('mongoose');

const resultatCourseSchema = new mongoose.Schema({
  // Définissez ici la structure de votre modèle
  // Par exemple :
  nom_grand_prix: String,
  position_pilote: [{ Position: Number, Pilote: String, Écurie: String }],
  annee: Number
});

const ResultatCourse = mongoose.model('ResultatCourse', resultatCourseSchema, 'resultatscourse');

module.exports = ResultatCourse;
