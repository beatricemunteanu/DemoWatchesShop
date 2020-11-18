import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

  
const routes: Routes = [{ path: '', redirectTo: 'products-list', pathMatch: 'full'},
                        {path: 'products-list', component: ProductListComponent},
                        { path: 'shopping-cart', component: ShoppingCartComponent},
                        { path: '**', redirectTo: 'products-list', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
