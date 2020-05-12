import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> {
      this.products.push(prd);
      return this.products;
    }

    deleteProduct(index : number):void{
      this.products.splice(index,1);
    }

    sortProductsByName(products : Array<Product>):Array<Product> {
      products.sort(function (a, b) {
      return a.ProductName.length - b.ProductName.length;
    });
    return products;
    }

    updateExistingProduct(products : Array<Product>,prd:Product, index :number):Array<Product>{
      products[index] = Object.assign({},prd);
      return products;
    }
}
