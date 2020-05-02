import { v4 as uuid } from 'uuid';
export class AbstractInstruction {
    id:number;

    constructor(){
        this.id = uuid();
    }
}