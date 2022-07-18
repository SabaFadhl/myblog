import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
