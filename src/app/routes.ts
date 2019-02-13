import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { ProductComponent } from './pages/product.component';
import { GenericCategoryComponent } from './pages/category.component';
import { CartComponent } from './pages/cart.component';
import { CheckoutComponent } from './pages/checkout.component';
import { CheckoutSuccessComponent } from './pages/checkout-success.component';

export const routeConfig: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'checkout/success', component: CheckoutSuccessComponent},
    {path: ':category', component: GenericCategoryComponent},
    {path: ':category/:product', component: ProductComponent},
];