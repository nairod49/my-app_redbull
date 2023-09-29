  export interface Pilotes {
    _id: string;
    nom: string;
    nationalite: string;
    date_de_naissance: string;
    equipe_actuelle: string;
    palmares: {
      annee: number;
      championnat: string;
      victoires: number;
      podiums: number;
    }[];
  }

  
  
  
  
  