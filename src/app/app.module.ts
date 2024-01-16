import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListproductsComponent } from './Components/listproducts/listproducts.component';
import { AddproductsComponent } from './Components/addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListproductsComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
