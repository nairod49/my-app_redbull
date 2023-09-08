export interface ResultatCourse {
    _id: string;
    nom_grand_prix: string;
    position_pilote: {
      Position: number;
      Pilote: string;
      Ecurie: string;
    }[];
    annee: string;
    Statut?: string;
  }
  