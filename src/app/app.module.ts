import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VideofileComponent } from './videofile/videofile.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AgmCoreModule} from '@agm/core';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { FolklorshoppocetnaComponent } from './folklorshoppocetna/folklorshoppocetna.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AutentifikacijaService } from './autentifikacija.service';
import { ZastitaService } from './zastita.service';
import { BlogComponent } from './blog/blog.component';
import { ServeriService } from './serveri.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';
import * as rxjs from 'rxjs';
import { ShopComponent } from './shop/shop.component';
import { KorpaComponent } from './korpa/korpa.component';
import { OpisProizvodaComponent } from './opis-proizvoda/opis-proizvoda.component';
import { ShoppingService } from './shopping.service';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselpocetnaComponent } from './carouselpocetna/carouselpocetna.component';
import { PostblogService } from './postblog.service';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    VideofileComponent,
    PhotogalleryComponent,
    AboutComponent,
    ContactComponent,
    FormComponent,
    GeolocationComponent,
    routingComponents,
    AboutpageComponent,
    PocetnaComponent,
    PageNotFoundComponent,
    GallerypageComponent,
    FolklorshoppocetnaComponent,
    SigninComponent,
    SignupComponent,
    BlogComponent,
    ShopComponent,
    KorpaComponent,
    OpisProizvodaComponent,
    CarouselComponent,
    CarouselpocetnaComponent,
    AddBlogComponent,
    EditBlogComponent,
   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvXUcJrl0zNEoGOxpsfhR9Z9rYejVwgqk'
    }),
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    
    
   
  ],

  providers: [ 
    ServeriService,
    AutentifikacijaService, 
    ZastitaService,
    ShoppingService,
    PostblogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
