import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="header">
 
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