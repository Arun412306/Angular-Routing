import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {

  public products = [];
  public id;
  public product;
  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.products = this.data.Getproducts();
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.find(x => x.Id == this.id);
  }

  public ShowDescription(product) {
    this.router.navigate(['description',product.Id], { relativeTo: this.route });
    // this.router.navigate(['description', product.Id])
  }
}
