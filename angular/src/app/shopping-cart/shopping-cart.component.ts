import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../app/services/cart.service';
import { ProductListService } from '../app/services/product-list.service';
import { Product } from '../product-list/product/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  productList: Product[] = []//PRODUCTS;
  total: number;
  routerLink: any
  error = ''
  constructor(
    private _route: ActivatedRoute,
    private cartService: CartService,
  ) { }
  
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
    this.cartService.getCartProducts().subscribe((cart) => {
      this.productList = cart['prod'];
      this.total = cart['total']
    },
    (err) => this.error = err)
  }

   deleteProdCart($id){
     this.cartService.deleteProductCart($id).subscribe(() => {
      },
      (err) => this.error = err
    );
    }

}
