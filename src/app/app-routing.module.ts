import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { DescriptionComponent } from './description/description.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductslistComponent },
  {
    path: 'products/:id', component: ProductsdetailsComponent,
    children: [
      { path: 'description', component: DescriptionComponent },
      { path: 'description/:id', component: DescriptionComponent }
    ]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
