import { Choice } from "./choice";

export class ChallengeItemTask {
    id:number;
    challengeItemId:number;
    question:string;
    choiceList:Array<Choice>;
    constructor(){
        this.choiceList = new Array();
    }
}