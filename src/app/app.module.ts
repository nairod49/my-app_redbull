import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './acceuil/acceuil.component';
import { CourseLiveComponent } from './course-live/course-live.component';
import { PilotesComponent } from './pilotes/pilotes.component';
import { ResultatsCourseComponent } from './resultats-course/resultats-course.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'courselive', component: CourseLiveComponent },
  { path: 'pilotes', component: PilotesComponent },
  { path: 'resultatscourse', component: ResultatsCourseComponent },
  {path: 'accueil', component: AccueilComponent},
  { path: '', redirectTo: '/courselive', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CourseLiveComponent,
    PilotesComponent,
    ResultatsCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   { }
