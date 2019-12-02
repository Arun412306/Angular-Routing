import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Getproducts() {
    return [
      { Id: 1, Name: 'Samsung TV', Price: 45000.00, Photo: 'assets/tv.jpg', Description: 'Something about Samsung Tv' },
      { Id: 2, Name: 'Nike', Price: 4000.00, Photo: 'assets/shoe.jpg', Description: 'Something about Nike shoes' }
    ];
  }
}
