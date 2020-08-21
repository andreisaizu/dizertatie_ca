import { ChallengeItem } from "./challengeItem";

export class Challenge {
    id:number;
    title:string;
    challengeItemList:Array<ChallengeItem>;
    constructor(){
        this.challengeItemList = new Array();
    }
}