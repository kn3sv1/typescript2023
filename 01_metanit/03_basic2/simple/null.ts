export let roma: any = 123;

// https://metanit.com/web/typescript/2.8.php

let userId: number|null = null;
 
function printId(id: number|null){
    if (id === null) {
        console.log("пользователь отсутствует");
    } else {
        console.log(`id пользователя: ${id}`);
    }
}
printId(userId)     // пользователь отсутствует
userId = 45;
printId(userId);    // id пользователя: 45