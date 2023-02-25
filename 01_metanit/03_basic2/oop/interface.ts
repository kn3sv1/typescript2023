export let roma: any = 123;

// https://metanit.com/web/typescript/3.3.php

interface IUser {
    id: number;
    name: string;
    sayWords(words: string): void;
}
let employee: IUser = {
      
    id: 1, 
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${this.name} говорит "${words}"`);
    }
}
  
employee.sayWords("Привет, как дела?");