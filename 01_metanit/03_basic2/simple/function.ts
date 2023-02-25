export let roma: any = 123;

// https://metanit.com/web/typescript/2.2.php
function getName(firstName: string, lastName: string="Иванов") {
     
    return firstName + " " + lastName;
}
 
let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася Иванов

// https://metanit.com/web/typescript/2.3.php
function hello1(){
    console.log("Hello TypeScript");
};
function hello2(){
    console.log("Hello TypeScript2");
};
function hello3(s:string){
    console.log("Hello " + s);
};
 
let message: ()=>void = hello1;
message();

let message2: () => void;
message2 = hello1;
message2 = hello2;
message2();

// ----------------------------------------
let square = x => x * x;
let hello = () => "hello world"
  
console.log(square(5)); // 25
console.log(hello());   // hello world