import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from "../products-data.service";

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {

  public products = [];
  constructor(private data:ProductsDataService) { }

  ngOnInit() {
    this.data.GetProducts().subscribe(data=>this.products = data);
    // this.data.AddProduct().subscribe(data=>this.products = data);
  }

  public SubmitData(productData){
    this.data.AddProduct(productData);
    alert("Record Inserted...");
  }

  
}
