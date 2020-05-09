import { Choice } from "./choice";
import { ChallengeItemTask } from "./challengeItemTask";

export class ChallengeItem {
    id:number;
    challengeId:number;
    description:string;
    challengeItemTaskList:Array<ChallengeItemTask>;

    constructor(){
        this.challengeItemTaskList = new Array();
    }
}