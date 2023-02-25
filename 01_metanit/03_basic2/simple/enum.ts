export let roma: any = 123;

// https://metanit.com/web/typescript/2.11.php

enum Season { 
    Winter = "Зима", 
    Spring = "Весна",
    Summer = "Лето", 
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето