import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,MatSidenavModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BookAddressComponent } from './book-address/book-address.component';
import { RomeComponent } from './gallery/rome/rome.component';
import { NewyorkComponent } from './gallery/newyork/newyork.component';
import { ParisComponent } from './gallery/paris/paris.component';
import { NComponent } from './book-address/n/n.component';
import { RComponent } from './book-address/r/r.component';


const appRoutes: Routes = [
  {path:  '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'book-address', component: BookAddressComponent},
  {path: 'book-address/n', component: NComponent},
  {path: 'book-address/r', component: RComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/rome', component: RomeComponent},
  {path: 'gallery/paris', component: ParisComponent},
  {path: 'gallery/newyork', component: NewyorkComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    BookAddressComponent,
    RomeComponent,
    NewyorkComponent,
    ParisComponent,
    NComponent,
    RComponent
  ],
  imports: [
   
	  HttpModule, 
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
	  BrowserAnimationsModule,
	  NgxGalleryModule,
	  NgxImageGalleryModule,
	  MatButtonModule,
    MatCheckboxModule,
	  MatSidenavModule,
	  ReactiveFormsModule,
	  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

