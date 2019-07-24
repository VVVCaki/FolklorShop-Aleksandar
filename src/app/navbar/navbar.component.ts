import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AutentifikacijaService } from '../autentifikacija.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appName = 'Folklor Shop';

  constructor(private autentifikacijaService: AutentifikacijaService,
    private router:Router,) {
    
   }

  ngOnInit() {
  }


  odjaviSe(){
    this.autentifikacijaService.odjaviSe();
    this.router.navigate(['/signin']);
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'You log out!',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
