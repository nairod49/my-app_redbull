import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResultatCourse } from './resultat-course.model'; // Importez le modèle

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

  resultatCourse: ResultatCourse[] = []; // Utilisez le modèle pour stocker les résultats de course

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

 // Récupérez la liste des résultats de course depuis votre API Node.js
 this.http.get<ResultatCourse[]>('http://localhost:3000/resultatscourse').subscribe(data => {
  this.resultatCourse = data;
});

// Récupérez la liste des années et des Grands Prix depuis votre API Node.js
this.http.get<number[]>('http://localhost:3000/resultatscourse/annees').subscribe(data => {
  this.annee = data;
});
this.http.get<string[]>('http://localhost:3000/resultatscourse/grandsprix').subscribe(data => {
  this.grandsPrix = data;
});

 
  }

  
}
