import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AutentifikacijaService } from './autentifikacija.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBhCuHK7hqvzEVx4peOFdK9t6bKwVzN-Mg",
      authDomain: "autentifikacija-52a34.firebaseapp.com",
    })
  }

  title = "FolklorShop"
  constructor(private autentifikacijaService:AutentifikacijaService,
    private router:Router,
   ){}
 

  odjaviSe(){
    this.autentifikacijaService.odjaviSe();
    this.router.navigate(['/signin']);
  }

  
}
