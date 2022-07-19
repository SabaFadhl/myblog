import { Component } from '@angular/core';
import { ProductServices } from './product.service';
import { Product } from './Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[]=[];
  productService;
  constructor(){
    this.productService=new ProductServices();
  }
  getProducts(){
    this.products=this.productService.getAllProducts();
  }
  mydate =new Date();
  myJson={name:'Saba',age:'24',department:'Front End Developer',address:{city:'Sana',phoneNumber:'74384784'}}
  myArrayNum=[22,33,44,55,66,77,88]
  printNumber1=12;
  printNumber2=12
  sum(){
    return this.printNumber1+this.printNumber2;
  }
  onClick1() {
    console.log("You have just, clicked!!");
  }

  someText:string="You can change me";
  title = 'myblog';
  myInfo=true;
  myname="Saba Fadhl"
  // Parameter type annotation
  greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
   dataInfo:boolean=true;
   customersArray:customer[]=[
    {
      name:"saba",
      age:24,
      city:"Dhamar"
     },
     {
      name:"Rwan",
      age:24,
      city:"Sana'a"
     },
     {
      name:"Hisham",
      age:24,
      city:"Taiz"
     }

   ];
   personObject={
    name:"saba",
    age:24,
    city:"Sana'a"
   }
}

class customer{
  name:string="";
  age:number=0;
  city:string="";
}
