import { Injectable } from '@angular/core';
import { proizvodi } from './proizvodi';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  proizvodi = proizvodi;


  constructor() { }

  korpa = [];

  dodajUKorpu(proizvod){
    this.korpa.push(proizvod);
  }

  uzmiPredmete(){
    return this.korpa;
  }

  ocistiKorpu(){
    this.korpa = [];
    return this.korpa;
  }

}
