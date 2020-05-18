import { ChoiceValue } from "./choiceValue";

export class Choice {
    id:number;
    challengeTaskId:number;
    values:Array<ChoiceValue>;
    correct:boolean;
}