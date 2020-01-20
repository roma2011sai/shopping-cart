import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsResponse } from 'src/app/models/products-res';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  openCloseCart = new BehaviorSubject(false);
  cartDataChange = new Subject();
  products: ProductsResponse[] = [];
  totalCartitems = 0;
  constructor() { }

  addProduct(product: ProductsResponse) {
    product.number = isNaN(product.number) || product.number === 0 ? 1 : product.number;
    let productIndex = -1;
    if (this.products.length > 0) {

     productIndex = this.products.findIndex(productData => productData.name === product.name);
     if (productIndex === -1) {
      this.products.push(product);
    } else {
      this.products[productIndex].number = this.products[productIndex].number + 1;
    }
} else {
  this.products.push(product);
}
    this.totalCartitems = this.totalCartitems + 1;
    this.cartDataChange.next();
  }

  deleteProduct(product: ProductsResponse) {
    let productIndex = -1;
    if (this.products.length > 0) {

     productIndex = this.products.findIndex(productData => productData.name === product.name);
     if (productIndex === -1) {
      this.products.splice( this.products.indexOf(product), 1 );
    } else {
      this.products[productIndex].number = this.products[productIndex].number - 1;
      if (this.products[productIndex].number === 0) {
        this.products.splice( this.products.indexOf(product), 1 );
      }
    }
} else {
  this.products.splice( this.products.indexOf(product), 1 );
 /*  this.products.pop(product); */
}
    this.totalCartitems = this.totalCartitems - 1;
    this.cartDataChange.next();
  }
}

