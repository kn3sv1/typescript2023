export let roma: any = 123;

// https://metanit.com/web/typescript/3.1.php

class User {
  
    name: string;
    age: number;
}
 
let tom = new User();
tom.name = "Tom";
tom.age = 36;
console.log(`name: ${tom.name}  age: ${tom.age}`);  // name: Tom  age: 36


abstract class Figure {
    abstract getArea(): void;
}
class Rectangle extends Figure{
     
    constructor(public width: number, public height: number){ 
        super();
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea();