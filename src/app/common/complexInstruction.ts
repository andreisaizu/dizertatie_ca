import { Instruction } from "./instruction";
import { AbstractInstruction } from "./abstractInstruction";

export class ComplexInstruction extends AbstractInstruction {
    baseInstruction:Instruction;
    instructionList:Array<AbstractInstruction>;

    constructor(){
        super();
        this.instructionList = new Array<AbstractInstruction>();
    }
    
}