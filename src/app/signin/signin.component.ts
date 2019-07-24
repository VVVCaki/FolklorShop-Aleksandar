import { Component, OnInit } from '@angular/core';
import { AutentifikacijaService } from '../autentifikacija.service';
import { NgForm } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private autentifikacijaService: AutentifikacijaService) { }

  ngOnInit() {
  }

  prijaviSe(form:NgForm){
    const email = form.value.email;
    const sifra = form.value.sifra;
    this.autentifikacijaService.prijaviKorisnika(email, sifra);
    Swal.fire('You register in! Now you can enjoy shopping.','', 'success')
  }
}
