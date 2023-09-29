import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-live',
  templateUrl: './course-live.component.html',
  styleUrls: ['./course-live.component.css']
})
export class CourseLiveComponent implements OnInit {
  courseEnCours: boolean = false;


  ngOnInit(): void {
     const dateDebutCourse = new Date('2023-10-17T10:00:00'); // Remplacez par la date réelle

     // Obtenez la date et l'heure actuelles
     const dateActuelle = new Date();
 
     // Vérifiez si la date actuelle est après la date de début de course
     if (dateActuelle >= dateDebutCourse) {
       this.courseEnCours = true;
     } else {
       this.courseEnCours = false;
     }
  }
}
