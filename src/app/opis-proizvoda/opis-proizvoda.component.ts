import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { proizvodi } from 'src/app/proizvodi';
import { ShoppingService } from 'src/app/shopping.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AutentifikacijaService } from '../autentifikacija.service';

@Component({
  selector: 'app-opis-proizvoda',
  templateUrl: './opis-proizvoda.component.html',
  styleUrls: ['./opis-proizvoda.component.css']
})
export class OpisProizvodaComponent implements OnInit {

  proizvod;
  proizvodi = proizvodi;

  constructor(private route: ActivatedRoute,
              private shoppingService: ShoppingService,
              private autentifikacijaService: AutentifikacijaService,
              private router:Router,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.proizvod = this.proizvodi[+params.get('proizvodId')];
    })
  }
  staviUKorpu(proizvod){
    this.shoppingService.dodajUKorpu(proizvod);
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your product has been added to the cart!',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
