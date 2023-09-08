const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const ResultatCourse = require('./resultatsCourse.js');

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


app.use(cors());

// Middleware pour analyser les données de requête
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/resultatscourse', async (req, res) => {
  try {
    // Code pour récupérer les données de résultat de course depuis MongoDB
    const resultats = await ResultatCourse.find(); // Supposons que vous utilisez Mongoose

    // Renvoyer les données en tant que réponse JSON
    res.json(resultats);
  } catch (error) {
    console.error(error);
    // Renvoyer une réponse d'erreur avec un code 500 (Internal Server Error)
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des résultats de course.' });
  }
});

const resultatCourseRouter = require('./routes/resultatsCourse');
app.use('/resultatscourse', resultatCourseRouter);


// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
