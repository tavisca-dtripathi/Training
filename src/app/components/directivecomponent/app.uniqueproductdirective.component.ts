import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-uniqueproduct-directive-component',
    template: `
   <div>
   <label><strong>Enter Product Id</strong></label>
   <br>
          <input type="text" name="ProductId" [(ngModel)]="productId" [productdirective]= 'productId'>
   </div>

  `
})
export class UniqueProductDirectiveComponent implements OnInit {
    productId: string;
    constructor() {
        this.productId = '';
    }
    selectColor(Id: string): void {
        this.productId = Id;
    }
    ngOnInit(): void { }
}
