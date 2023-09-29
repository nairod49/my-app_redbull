const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const ResultatCourse = require('./resultatsCourse.js');
const Classement = require('./classement.js');


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
    const { annee, nom_grand_prix } = req.query;

    // Vérifiez si les paramètres de requête "annee" et "grandPrix" sont présents.
    if ( !nom_grand_prix) {
      return res.status(400).json({ message: "Les paramètres 'annee' et 'nom_grand_prix' sont obligatoires." });
    }

    // Effectuez la recherche en fonction de l'année et du grand prix.
    let query ={nom_grand_prix: req.query.nom_grand_prix.toString};
    const resultats = await ResultatCourse.find(query);
    
    if (resultats.length === 0) {
      return res.status(404).json({ message: "Aucun résultat trouvé pour ces critères." });
    }
    res.json(resultats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la recherche des résultats de course.' });
  }
});


const resultatCourseRouter = require('./routes/resultatsCourse');
app.use('/resultatscourse', resultatCourseRouter);

const pilotesRoutes = require('./routes/pilotes.js');
app.use('/pilotes', pilotesRoutes);

const grandPrix = require('./routes/course.js');
app.use('/grandprix',grandPrix );

const classement = require('./routes/classement.js');
app.use('/classement',classement );

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
