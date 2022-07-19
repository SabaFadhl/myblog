import { Product } from "./Products";

export class ProductServices{
  public getAllProducts(){
    let products:Product[];
    products=[
      new Product(1,'Banana',20000),
      new Product(2,'Orange',30000),
      new Product(3,'Tomatos',10000),
      new Product(4,'apple',40000),
      new Product(5,'Onion',50000),
    ];
    return products;
  }

}
