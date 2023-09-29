const mongoose = require('mongoose');

const classementSchema = new mongoose.Schema({
    position:Number,
    nom: String,
    ecurie: String,
    temps: String,
    ecart: String,
});

const Classement = mongoose.model('Classement', classementSchema);

module.exports = Classement;