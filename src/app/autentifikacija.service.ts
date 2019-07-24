import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AutentifikacijaService {
    
    token: string;

    constructor(private router:Router) {}


    prijaviKorisnika(email: string, sifra: string){
        firebase.auth().createUserWithEmailAndPassword(email, sifra)
        .then(
            (response)=> {this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then(
                (token: string)=> this.token = token
            )
        }
        )
        .catch(
            (error) => console.log(error)
        )
    }

    vratiToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string) => this.token = token
        )

        return this.token;
    }

    registrujKorisnika(email: string, sifra: string){
        firebase.auth().createUserWithEmailAndPassword(email,sifra)
        .catch(
            (error)=>console.log(error)
        )
    }

    prijavljen(){
        return this.token != null;
    }

    odjaviSe(){
        firebase.auth().signOut();
        this.token = null;
    }
}