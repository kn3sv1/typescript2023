export let roma: any = 123;

// https://metanit.com/web/typescript/3.3.php

interface IMovable {
 
    speed: number;
    move(): void;
}
interface ICar extends IMovable {
 
    fill(): void;
}
class Car implements ICar {
 
    speed: number;
    move(): void {
 
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
 
    fill(): void {
 
        console.log("Заправляем машину топливом");
    }
}
 
let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();