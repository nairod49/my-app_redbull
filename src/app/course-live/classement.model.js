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
    type: String, 
    required: true,
  },
  ecart: {
    type: String,
    required: true,
  },
});

const Classement = mongoose.model('Classement', classementSchema);

module.exports = Classement;