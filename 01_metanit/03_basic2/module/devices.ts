export interface Device{
    name: string;
}
     
export class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
export function call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}
