import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AccueilComponent {
  title: string;

  constructor(private router: Router) {
    this.title = 'Page d\'accueil';
  }

}
