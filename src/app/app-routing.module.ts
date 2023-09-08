import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './acceuil/acceuil.component';
import { CourseLiveComponent } from './course-live/course-live.component';
import { PilotesComponent } from './pilotes/pilotes.component';
import { ResultatsCourseComponent } from './resultats-course/resultats-course.component';


const routes: Routes = [
  { path: 'courselive', component: CourseLiveComponent },
  { path: 'pilotes', component: PilotesComponent },
  { path: 'resultatscourse', component: ResultatsCourseComponent },
  // Ajoutez une route pour la page d'accueil
  { path: 'accueil', component: AccueilComponent },
  // Définissez la route par défaut, par exemple, pour rediriger vers la page d'accueil
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
