import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import {CartService} from '../../app/services/cart.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productItem: Product;
  selectedValue = 1;
  error = ''
  constructor(
    private cartService: CartService

  ){}

  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addItem(this.productItem._id, this.selectedValue)
    .subscribe(() => {
    },
      (err) => this.error = err
    );
  }
}
