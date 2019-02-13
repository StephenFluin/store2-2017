import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { routeConfig } from './routes';

import { HomeComponent } from './pages/home.component';
import { GenericCategoryComponent } from './pages/category.component';
import { CheckoutComponent } from './pages/checkout.component';
import { CheckoutSuccessComponent } from './pages/checkout-success.component';
import { ProductComponent } from './pages/product.component';
import { CartComponent } from './pages/cart.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GenericCategoryComponent,
        CheckoutComponent,
        CheckoutSuccessComponent,
        ProductComponent,
        CartComponent,
    ],
    imports:      [
        BrowserModule,
        RouterModule.forRoot(routeConfig)],
    bootstrap:    [AppComponent],
})
export class AppModule {}