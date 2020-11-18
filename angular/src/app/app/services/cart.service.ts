import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../../product-list/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl = 'http://localhost:8080/api/services';
  products: Product[];
                
constructor(private http: HttpClient) { }
           
private handleError(error: HttpErrorResponse) {
  console.log(error);
  return throwError('Error! something went wrong.');
}

getCartProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/getCart`).pipe(
      map((res) => {
        this.products = res['data'];
        console.log(this.products)
        return this.products;
      }),
      catchError(this.handleError));
  
}

addItem(id,quantity): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/addToCart`,
                {"id": id.toString(),
                "quantity" : quantity.toString()},
            { headers: new HttpHeaders()
                .set("Content-Type", "application/x-www-form-urlencoded")}
        );
    }

deleteProductCart(id:number): Observable<Product> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.delete<Product>(`${this.baseUrl}/deleteFtomCart`, { params: params })
    }
}