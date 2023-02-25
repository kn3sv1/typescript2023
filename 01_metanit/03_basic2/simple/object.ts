export let roma: any = 123;

// https://metanit.com/web/typescript/2.7.php

let person = { name: "Tom", age: 23 };
//person = { name: "Bob"};           // ! Ошибка
person = { age: 26,  name: "Bob"}; // Норм


function printUser({name, age}: { name: string; age: number}) {
    console.log(`name: ${name}  age: ${age}`);
  }
   
  let tom = {name: "Tom", age: 36};
  printUser(tom);