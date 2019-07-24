import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { AutentifikacijaService } from './autentifikacija.service';

@Injectable()
    export class ZastitaService implements CanActivate{
        constructor(private autentifikacijaService:AutentifikacijaService){}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            return this.autentifikacijaService.prijavljen();
        }
}