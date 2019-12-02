import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  public products = [];  

  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
    this.products = this.data.Getproducts();    
  }

  public ShowDetails(product){
    this.router.navigate(['products',product.Id]);
  }

}
