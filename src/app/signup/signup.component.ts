import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutentifikacijaService } from '../autentifikacija.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private autentifikacijaService: AutentifikacijaService) { }

  ngOnInit() {
  }

  registrujSe(form:NgForm){
    const email = form.value.email;
    const sifra = form.value.sifra;
    this.autentifikacijaService.registrujKorisnika(email,sifra);
    Swal.fire('You login! Now you can enjoy shopping.','', 'success')
  }

}
