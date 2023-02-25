// вариант 1

// (() => {

// let someVar: any = "hello DEMO";
// console.log(someVar);   // сейчас someVar - это string

// })();


// вариант 2
/**
 * When you don't have a import or export statement your file is considered a script, 
 * not a module, and scripts share a global scope. See the documentation: https://www.typescriptlang.org/docs/handbook/modules.html
 */

// https://github.com/microsoft/TypeScript/issues/47229

export let roma: any = 123;

let someVar: any = "hello DEMO";
console.log(someVar);


function getName(firstName: string, lastName: string="Иванов") {
     
    return firstName + " " + lastName;
}
 
let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася Иванов