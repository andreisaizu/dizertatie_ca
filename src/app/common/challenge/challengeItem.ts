import { Choice } from "./choice";

import { v4 as uuid } from 'uuid';
export class ChallengeItem {
    id:number;
    challengeId:number;
    orderId:number;
    question:string;
    choiceList:Array<Choice>;
    selectedChoiceId:number;
    constructor(){
        this.id = uuid();
    }
}