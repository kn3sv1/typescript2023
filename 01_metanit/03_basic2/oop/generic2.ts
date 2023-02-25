export {};

// https://metanit.com/web/typescript/3.5.php


function compareName<T extends {name:string}>(obj1: T, obj2: T): void{
     
    if(obj1.name === obj2.name){
        console.log("Имена совпадают");
    }
    else{
        console.log("Имена различаются");
    }
 
}
 
let tom: {name:string} = {name: "Tom"};
let sam: {name: string} = {name: "Sam"};
compareName<{name:string}>(tom, sam);

