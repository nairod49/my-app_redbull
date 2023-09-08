const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://dorian1letort:1fJLQIHsfxtpoIlH@cluster0.jl8brse.mongodb.net/base_de_donne?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const port = 3000;

// Middleware pour analyser les données de requête
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const resultatCourseRouter = require('./routes/resultatCourse');
app.use('/resultatscourse', resultatCourseRouter);


// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
