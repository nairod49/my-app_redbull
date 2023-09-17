// pilote.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pilotes } from './pilotes.model'; 
@Component({
  selector: 'app-pilotes',
  templateUrl: './pilotes.component.html',
  styleUrls: ['./pilotes.component.css']
})
export class PilotesComponent implements OnInit {
  pilotes: Pilotes[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Récupérez la liste des pilotes depuis votre API Node.js
    this.http.get<Pilotes[]>('http://localhost:3000/pilotes').subscribe(data => {
      this.pilotes = data;
    });
  }
}
