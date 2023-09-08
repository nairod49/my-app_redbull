import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-resultats-course',
  templateUrl: './resultats-course.component.html',
  styleUrls: ['./resultats-course.component.css']
})
export class ResultatsCourseComponent implements OnInit {
  annee: number[] = []; // Initialisez avec un tableau vide
  grandsPrix: string[] = []; // Initialisez avec un tableau vide
  selectedAnnee: number = 2022; // Année sélectionnée par défaut
  selectedGrandPrix: string = ''; // Grand Prix sélectionné par défaut
  resultats: any[] = []; // Tableau pour stocker les résultats de course

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
     // Récupération des années disponibles depuis l'API
     this.getAnneesDisponibles();

     // Récupération des Grands Prix disponibles depuis l'API
     this.getGrandsPrixDisponibles();
  }

  getAnneesDisponibles(): void {
    this.http.get<number[]>('http://localhost:3000/annees').subscribe((data) => {
      this.annee = data;
    });
  }

  getGrandsPrixDisponibles(): void {
    this.http.get<string[]>('http://localhost:3000/grandsprix').subscribe((data) => {
      this.grandsPrix = data;
    });
  }

  onGrandPrixChange(event: any) {
    this.selectedGrandPrix = event.target.value;
    // Vous pouvez effectuer des actions lorsque la sélection du Grand Prix change ici
  }

  onAnneeChange(event: any) {
    this.selectedAnnee = event.target.value;
    // Vous pouvez effectuer des actions lorsque la sélection de l'année change ici
  }

  loadResultatCourse(): void {
    if (this.selectedAnnee && this.selectedGrandPrix) {
      if (this.selectedAnnee && this.selectedGrandPrix) {
        // Utiliser l'année et le Grand Prix sélectionnés pour effectuer une requête GET vers votre backend
        // et récupérer les résultats de course correspondants.
        const params = new HttpParams()
          .set('annee', this.selectedAnnee.toString())
          .set('grandPrix', this.selectedGrandPrix);
  
        this.http
          .get<any[]>('http://localhost:3000/resultatscourse', { params })
          .subscribe((data) => {
            this.resultats = data;
          });
      }
  }
}
}
