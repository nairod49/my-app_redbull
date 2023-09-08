const mongoose = require('mongoose');


const resultatCourseSchema = new mongoose.Schema({
        _id: String,
        nom_grand_prix: String,
        annee: Number,
        position_pilote: [{
          Position: Number,
          Pilote: String,
          Écurie: String
        }],
});



    module.exports = mongoose.model('ResultatCourse', resultatCourseSchema);