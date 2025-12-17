
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';
/*import { NgxGalleryModule } from 'ngx-gallery';
import { NgxImageGalleryModule } from 'ngx-image-gallery';*/
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelCityComponent } from './hotels/hotel-city/hote-city.component';
import { NewyorkComponent } from './hotels/newyork/newyork.component';
import { ParisComponent } from './hotels/paris/paris.component';
import { RomeComponent } from './hotels/rome/rome.component';
import { HotelReserveComponent } from './hotel-reserve/hotel-reserve.component';
import { AppRoutingModule } from './app-routing.module';
import { BookAddressComponent } from './book-address/book-address.component';

/*import { NComponent } from './book-address/n/n.component';
import { RComponent } from './book-address/r/r.component';*/




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    HotelsComponent,
    HotelCityComponent,
    HotelReserveComponent,
    RomeComponent,
    NewyorkComponent,
    ParisComponent,
    BookAddressComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    /*NgxGalleryModule,
    NgxImageGalleryModule,*/

    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
