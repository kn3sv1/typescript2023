export let roma: any = 123;

// https://metanit.com/web/typescript/3.5.php


class User<T> {
 
    private _id: T;
    constructor(id:T) {
 
        this._id=id;
    }
    getId(): T {
 
        return this._id;
    }
}
 
let tom = new User<number>(3);
console.log(tom.getId()); // возвращает number
 
let alice = new User<string>("vsf");
console.log(alice.getId()); // возвращает string


