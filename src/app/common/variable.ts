import { VariableType } from "./variableTypeEnum";
import { InstructionComp } from "./component";

export class Variable extends InstructionComp {
    id: Number;
    name: String;
    value: String;
    type: VariableType;
}