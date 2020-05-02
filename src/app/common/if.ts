import { IfCondition } from "./ifCondition";
import { InstructionComp } from "./component";

export class If extends InstructionComp{
    id:Number;
    condition:IfCondition;
}