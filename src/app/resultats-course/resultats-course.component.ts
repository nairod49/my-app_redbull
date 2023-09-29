import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResultatCourse } from './resultat-course.model';

@Component({
  selector: 'app-resultats-course',
  templateUrl: './resultats-course.component.html',
  styleUrls: ['./resultats-course.component.css']
})
export class ResultatsCourseComponent implements OnInit {
  annees: number[] = [];
  grandsPrix: string[] = [];
  selectedAnnee: number | null = null;
  selectedGrandPrix: string | null = null;
  resultats: ResultatCourse[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Charger la liste des années disponibles
    this.http.get<number[]>('http://localhost:3000/resultatscourse/annees').subscribe(data => {
      this.annees = data;
    });

    // Charger la liste des Grands Prix disponibles
    this.http.get<string[]>('http://localhost:3000/resultatscourse/grandsprix').subscribe(data => {
      this.grandsPrix = data;
    });
  }

  onSubmit(): void {
    // Vérifier si une année et un Grand Prix ont été sélectionnés
    if (/*this.selectedAnnee === null ||*/ this.selectedGrandPrix === null) {
      return;
    }

    // obtenir les résultats en fonction de l'année et du Grand Prix sélectionnés
    const params = new HttpParams()
      //.set('annee', this.selectedAnnee.toString())
      .set('nom_grand_prix', this.selectedGrandPrix);

    this.http.get<ResultatCourse[]>('http://localhost:3000/resultatscourse', { params }).subscribe(data => {
      this.resultats = data;
    });
  }

  
}
