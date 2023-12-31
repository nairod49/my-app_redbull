import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  classement: any[] = []; //stocke le classement en temps réel

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // obtenir le classement en temps réel
   this.UpdateClassement();
   setInterval(()=>{
    this.UpdateClassement();
   },1000)
  }
  UpdateClassement():void{
    this.http.get<any[]>('http://localhost:3000/classement')
      .subscribe(data => {
        this.classement = data;
      });

  }
}
