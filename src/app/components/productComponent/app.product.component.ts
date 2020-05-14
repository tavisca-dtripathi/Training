import { Component,OnInit,Input,Output } from "@angular/core";
import { Product } from '../../models/app.products';
import { Logic } from '../../models/app.logic';


@Component({
    selector: "app-product-component",
    templateUrl: './product.view.html'
})
export class ProductComponent implements OnInit{
    
    product: Product;
    products: Array<Product>;
    private logic: Logic;
    headers: Array<string>;
    
    constructor() {        
        this.product = new Product(0, '', 0, '');
        this.products = new Array<Product>();
        this.logic = new Logic();
        this.headers  =new Array<string>();
    }

    ngOnInit(): void {
        this.products = this.logic.getProducts();
     // read product Scehma from Product class
     for(let p in this.product) {
       this.headers.push(p);
     }
    }
    
}