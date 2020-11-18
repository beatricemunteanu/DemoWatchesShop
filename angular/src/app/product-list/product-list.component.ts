import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../app/services/product-list.service';
import { CartService } from '../app/services/cart.service';

import {Product} from './product/product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []//PRODUCTS;
  routerLink: any
  error = ''
  constructor(
    private productService: ProductListService,
  ) { }
  
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      console.log(products);
    },
    (err) => this.error = err)
  }

}
