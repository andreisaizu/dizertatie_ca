import { ChallengeItem } from "./challengeItem";

export class Challenge {
    id:number;
    challengeItemList:Array<ChallengeItem>;
    constructor(){
        this.challengeItemList = new Array();
    }
}