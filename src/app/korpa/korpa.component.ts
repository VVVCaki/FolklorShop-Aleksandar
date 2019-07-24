import { Component, OnInit } from '@angular/core';
import { proizvodi } from 'src/app/proizvodi';
import { ShoppingService } from 'src/app/shopping.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  korpa;
  suma: number = 0;
  cene = [];
  

  constructor(private shoppingservice: ShoppingService,
     private router: Router,) {
    this.korpa = this.shoppingservice.uzmiPredmete();
   }

  

  ngOnInit() {
  }

  isprazniKorpu(){
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your shopping cart is empty now!',
      showConfirmButton: false,
      timer: 2000
    })
  }

  brojStavki(){
    return this.korpa.length;
  }

  izvrsiKupovinu(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Do you want to make a purchase?',
      text: "You will not be able to cancel your purchase!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, make a purchase!',
      cancelButtonText: 'No, cancel a purchase!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'You made a purchase!',
          'Thank you for your purchase. Expect the shipment within 5 business days.',
          'success'
        ),
        this.korpa = this.shoppingservice.ocistiKorpu();
        this.router.navigate(['/pocetna']);
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'You cancel a purchase.',
          'Now you can change your shopping cart. :)',
          'error'
        )
      }
    })
  }
}
