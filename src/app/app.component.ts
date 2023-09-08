import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <header class="header">
  <div class="logo-container">
    <img src="my-app\src\gettyimages-1443067353-612x612.jpg" class="logo" alt="Logo Red Bull" />
  </div>
</header>

<nav class="navbar">
  <ul class="menu">
    <li class="menu-item"><a routerLink="/accueil" routerLinkActive="active">Acceuil</a></li>
    <li class="menu-item"><a routerLink="/courselive" routerLinkActive="active">Course Live</a></li>
    <li class="menu-item"><a routerLink="/pilotes" routerLinkActive="active">Pilotes</a></li>
    <li class="menu-item"><a routerLink="/resultatscourse" routerLinkActive="active">Résultats de Course</a></li>
  </ul>
</nav>

<router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
