import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Iproduct } from "./Iproduct";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  public apiurl = 'http://127.0.0.1:8080/getproducts';
  public postUrl = 'http://127.0.0.1:8080/addproducts' 

  constructor(private http:HttpClient) { }

  public GetProducts():Observable<Iproduct[]> {
    
    return this.http.get<Iproduct[]>(this.apiurl);
  }

  public AddProduct(productData){
    return this.http.post<any>(this.postUrl,productData);
  }
}
