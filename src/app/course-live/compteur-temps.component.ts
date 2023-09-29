// compteur-temps.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Date } from 'mongoose';

@Component({
  selector: 'app-compteur-temps',
  templateUrl: './compteur-temps.component.html',
  styleUrls: ['./compteur-temps.component.css']
})
export class CompteurTempsComponent implements OnInit {
  tempsRestant: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Faites une requête HTTP pour obtenir la date de début du Grand Prix en cours
    this.http.get<{ dateDebut: string }>('http://localhost:3000/grandprix/debut-grand-prix-en-cours')
      .subscribe(response => {
        const dateDebut = new Date(response.dateDebut).getTime();
        const maintenant = new Date().getTime();
        const difference = dateDebut - maintenant;

        if (difference > 0) {
          
          this.updateCountdown() ;
          setInterval(()=>{
            this.updateCountdown();
          },1000)

        } 
      });
  }
  updateCountdown():void{
    this.http.get<{ dateDebut: string }>('http://localhost:3000/grandprix/debut-grand-prix-en-cours')
    .subscribe(response => {
      const dateDebut = new Date(response.dateDebut).getTime();
      const maintenant = new Date().getTime();
      const difference = dateDebut - maintenant;

      if (difference > 0) {
        // Si la date de début est dans le futur, calculez le temps restant
        const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
        const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((difference % (1000 * 60)) / 1000);

        this.tempsRestant = `${jours}j ${heures}h ${minutes}m ${secondes}s`;
        
  }
})
  
}
}
