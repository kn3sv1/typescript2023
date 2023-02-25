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