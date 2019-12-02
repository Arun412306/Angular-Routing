import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { DescriptionComponent } from './description/description.component';
import { ProductsDataService } from './products-data.service';
import { MeanComponent } from './mean/mean.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    ProductslistComponent,
    ProductsdetailsComponent,
    DescriptionComponent,
    MeanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
