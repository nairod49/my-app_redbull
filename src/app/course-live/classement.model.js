const mongoose = require('mongoose');

const classementSchema = new mongoose.Schema({
    position: {
        type:Number,
        required: true,
    },
    nom: {
    type: String,
    required: true,
  },
  ecurie: {
    type: String,
    required: true,
  },
  temps: {
    type: String, // Vous pouvez ajuster le type en fonction de la manière dont vous stockez le temps
    required: true,
  },
  ecart: {
    type: String, // Vous pouvez ajuster le type en fonction de la manière dont vous stockez l'écart
    required: true,
  },
});

const Classement = mongoose.model('Classement', classementSchema);

module.exports = Classement;