import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../../product-list/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  baseUrl = 'http://localhost:8080/api/services';
  products: Product[];
                
constructor(private http: HttpClient) { }
           
private handleError(error: HttpErrorResponse) {
  console.log(error);
 
  // return an observable with a user friendly message
  return throwError('Error! something went wrong.');
}

getProducts(): Observable<Product[]> {
  return this.http.get(`${this.baseUrl}/getProductsList`).pipe(
    map((res) => {
      this.products = res['data'];
      return this.products;
    }),
    catchError(this.handleError));

  }
} 