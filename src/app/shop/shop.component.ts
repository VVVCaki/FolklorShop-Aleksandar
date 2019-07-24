import { Component, OnInit } from '@angular/core';
import { proizvodi } from 'src/app/proizvodi';
import { ShoppingService } from 'src/app/shopping.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AutentifikacijaService } from '../autentifikacija.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  proizvodi = proizvodi;
  
  constructor(private shoppingService: ShoppingService,
    private autentifikacijaService: AutentifikacijaService,
    private router:Router,) { }

  ngOnInit() {
  }

  staviUKorpu(proizvod){
    this.shoppingService.dodajUKorpu(proizvod);
    
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your product has been added to the cart!',
      showConfirmButton: false,
      timer: 2000,
    })
  }
}
