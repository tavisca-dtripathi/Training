import {Product} from './app.products';
import {Products} from './app.constants';
export class Logic{
    private products : Array<Product>;
    private prds = Products;
   
    constructor() {
       this.products = new Array<Product>();
       this.prds.forEach((prd) => {
           this.products.push(
               new Product(prd.ProductId,prd.ProductName,prd.Price,prd.Catgory))
       });
    }
    getProducts(): Array<Product> {
        return this.products;
      }
}