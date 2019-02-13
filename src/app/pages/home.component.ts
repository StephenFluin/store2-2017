import { Component } from '@angular/core';
import { StoreData } from '../data';

@Component({
    template: `
        <div *ngFor="let category of categories" class="category-item">
            <div>
                <img [src]="'https://shop.polymer-project.org/'+data[category].img">
            </div>
            <h2>
                {{data[category].name}}
            </h2>
            <button [routerLink]="category">Shop Now</button>
        </div>
    `,
})
export class HomeComponent {
    categories = ['mens-outerwear','ladies-outerwear','mens-tshirts','ladies-tshirts'];
    data = StoreData;
}