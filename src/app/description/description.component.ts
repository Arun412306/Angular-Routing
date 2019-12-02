import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public products = [];
  public id;
  public product;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.data.Getproducts();
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.find(x => x.Id == this.id);
  }
}



