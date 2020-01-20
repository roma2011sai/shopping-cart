import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { CartDataService } from 'src/app/services/cart-data.service';
import { ProductsResponse } from 'src/app/models/products-res';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

   openCart = false;
   products: ProductsResponse[] = [];
   totalItems = 0;
   totalPrice = 0;
  constructor(private cartData: CartDataService) { }

  ngOnInit() {
    this.cartData.openCloseCart.subscribe(data => this.openCart = data);
this.cartData.cartDataChange.subscribe(() => {
  this.products = this.cartData.products;
 this.totalItems = this.cartData.totalCartitems;
  this.totalPriceCalculation();
});
  }
  closeCart() {
   this.cartData.openCloseCart.next(false);
  }
  deleteProduct(product: ProductsResponse) {
        this.cartData.deleteProduct(product);
  }

  addProduct(product: ProductsResponse) {
          this.cartData.addProduct(product);
  }

  totalPriceCalculation(){
    this.totalPrice = 0;
    this.products.forEach(product => {
      const price = product.number * product.price;
      this.totalPrice = this.totalPrice + price;
    });
}
}
