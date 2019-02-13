import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div routerLink="/" id="title">
  AngularShop
</div>
<div style="float:right;"><a routerLink="/cart">Cart</a></div>
<nav>
  <a routerLink="/mens-outerwear">Men's Outerwear</a>
  <a routerLink="/ladies-outerwear">Ladies Outerwear</a>
  <a routerLink="/mens-tshirts">Men's T-Shirts</a>
  <a routerLink="/ladies-tshirts">Ladies T-Shirts</a>
</nav>

<router-outlet></router-outlet>

`
})
export class AppComponent {
}
