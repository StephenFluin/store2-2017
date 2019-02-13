import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreData } from '../data';

@Component({
    template: `
        <div>{{data.name}}</div>
        <div>({{data.products.length}} item<span *ngIf="data.products.length != 1">s</span>)</div>
        <div class="product-list">
            <a *ngFor="let product of data.products" class="product-thumb" [routerLink]="[product.name]">
                <img [src]="'https://shop.polymer-project.org/'+product.image">
                <div>{{product.title}}</div>
                <div>\${{product.price}}</div>
            </a>
        </div>
    `
})
export class GenericCategoryComponent {
    category : string;
    data : any;

    constructor(activatedRoute : ActivatedRoute) {
        activatedRoute.params.subscribe(params => {
            this.category = params['category'];
            this.data = StoreData[this.category];
        })
    }

   
}