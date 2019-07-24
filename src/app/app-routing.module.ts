import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { FolklorshoppocetnaComponent } from './folklorshoppocetna/folklorshoppocetna.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ZastitaService } from './zastita.service';
import { BlogComponent } from './blog/blog.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';
import { ShopComponent } from './shop/shop.component';
import { OpisProizvodaComponent } from './opis-proizvoda/opis-proizvoda.component';
import { KorpaComponent } from './korpa/korpa.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component'



const appRoutes:Routes = [
  { path: '', component:  FolklorshoppocetnaComponent},
  { path: 'pocetna', component: PocetnaComponent},
  { path: 'about', component: AboutpageComponent },
  { path: 'gallery', component: GallerypageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'shopp', component: ShopComponent},
  { path: 'opis/:proizvodId', component: OpisProizvodaComponent},
  { path: 'korpa', component: KorpaComponent, canActivate: [ZastitaService] },
  { path: 'addblog', component: AddBlogComponent},
  { path: 'blog/:blogId', component: EditBlogComponent},
  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [ FolklorshoppocetnaComponent,
                                  PocetnaComponent,
                                  AboutpageComponent,
                                  GallerypageComponent,
                                  SignupComponent,
                                  SigninComponent,
                                  BlogComponent, 
                                  ShopComponent,
                                  OpisProizvodaComponent,
                                  KorpaComponent,
                                  AddBlogComponent,
                                  EditBlogComponent,

                                 
                                  
                                 
                                 
                                 
                                  
                                  ]