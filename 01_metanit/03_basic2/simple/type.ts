export let roma: any = 123;

// https://metanit.com/web/typescript/2.14.php

type Person = {name: string; age: number};
// расширяем псевдоним Person
type Employee = Person & {company: string};
 
let tom: Person = {name: "Tom", age: 36};
let bob: Employee = {name: "Bob", age: 41, company: "Microsoft"};
 
function printPerson(user: Person){
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}
 
printPerson(tom);
printPerson(bob);  // bob представляет Employee, но он также соответствует псевдониму Person


let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);


let user: [string, number] = ["Tom", 36];
for(const prop of user){
    console.log(prop);
}