const Classement = require('./src/app/course-live/classement.model'); // Assurez-vous que le chemin est correct
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://dorian1letort:1fJLQIHsfxtpoIlH@cluster0.jl8brse.mongodb.net/base_de_donne?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB.');
  async function updateClassement() {
    try {
      // Logique de mise à jour du classement fictif
      const nouveauClassement = [
        { position: 1, nom: 'Pilote 1', ecurie: 'Écurie A', temps: '1:30:00', ecart: '0' },
  { position: 2, nom: 'Pilote 2', ecurie: 'Écurie B', temps: '1:30:10', ecart: '+10s' },
  { position: 3, nom: 'Pilote 3', ecurie: 'Écurie C', temps: '1:30:30', ecart: '+30s' },
  { position: 4, nom: 'Pilote 4', ecurie: 'Écurie D', temps: '1:30:45', ecart: '+45s' },
  { position: 5, nom: 'Pilote 5', ecurie: 'Écurie E', temps: '1:31:00', ecart: '+1m' },
  { position: 6, nom: 'Pilote 6', ecurie: 'Écurie F', temps: '1:31:20', ecart: '+1m 20s' },
  { position: 7, nom: 'Pilote 7', ecurie: 'Écurie G', temps: '1:31:40', ecart: '+1m 40s' },
  { position: 8, nom: 'Pilote 8', ecurie: 'Écurie H', temps: '1:32:00', ecart: '+2m' },
  { position: 9, nom: 'Pilote 9', ecurie: 'Écurie I', temps: '1:32:15', ecart: '+2m 15s' },
  { position: 10, nom: 'Pilote 10', ecurie: 'Écurie J', temps: '1:32:30', ecart: '+2m 30s' },
  { position: 11, nom: 'Pilote 11', ecurie: 'Écurie K', temps: '1:32:45', ecart: '+2m 45s' },
  { position: 12, nom: 'Pilote 12', ecurie: 'Écurie L', temps: '1:33:00', ecart: '+3m' },
  { position: 13, nom: 'Pilote 13', ecurie: 'Écurie M', temps: '1:33:15', ecart: '+3m 15s' },
  { position: 14, nom: 'Pilote 14', ecurie: 'Écurie N', temps: '1:33:30', ecart: '+3m 30s' },
  { position: 15, nom: 'Pilote 15', ecurie: 'Écurie O', temps: '1:33:45', ecart: '+3m 45s' },
  { position: 16, nom: 'Pilote 16', ecurie: 'Écurie P', temps: '1:34:00', ecart: '+4m' },
  { position: 17, nom: 'Pilote 17', ecurie: 'Écurie Q', temps: '1:34:15', ecart: '+4m 15s' },
  { position: 18, nom: 'Pilote 18', ecurie: 'Écurie R', temps: '1:34:30', ecart: '+4m 30s' },
  { position: 19, nom: 'Pilote 19', ecurie: 'Écurie S', temps: '1:34:45', ecart: '+4m 45s' },
  { position: 20, nom: 'Pilote 20', ecurie: 'Écurie T', temps: '1:35:00', ecart: '+5m' },
  // Ajoutez autant de pilotes que nécessaire
];
      
  
      // Supprimez l'ancien classement et insérez le nouveau
      await Classement.deleteMany({});
      await Classement.insertMany(nouveauClassement);
  
      console.log('Classement mis à jour avec succès !');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du classement :', error);
    }
  }
 

  // Démarrez la simulation de course avec un intervalle de 5 secondes (par exemple)
  const interval = setInterval(updateClassement, 5000); // Mettez à jour toutes les 5 secondes

  // Arrêtez la simulation après un certain temps (par exemple, 1 minute)
  setTimeout(() => {
    clearInterval(interval); // Arrêtez la simulation
    console.log('Simulation de course terminée.');
    mongoose.connection.close(); // Fermez la connexion à MongoDB
  }, 60000); // Arrêtez après 1 minute
});
