import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StoreData } from '../data';

@Component({
    template: `
    <div><img [src]="'https://shop.polymer-project.org/'+data.largeImage"></div>
    <div>{{data.title}}</div>
    <div>\${{data.price}}</div>
    <div>size: M</div>
    <div>quantity: 1</div>
    <div>Description:</div>
    <div>{{ data.description}}</div>
    <div>Add to Cart</div>
    `
})
export class ProductComponent {
    category: string;
    product: string;
    data;

    constructor(activatedRoute : ActivatedRoute) {
        activatedRoute.params.subscribe(params => {
            this.category = params['category'];
            this.product = params['product'];
            this.data = StoreData[this.category].products.find(
                product => product.name === this.product
            );
        })
    }
}