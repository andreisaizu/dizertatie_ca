import { ChallengeItemAnswer } from "./challengeItemAnswer";
import { ChallengeValidatedItemAnswer } from "./challengeValidatedItemAnswer";

export class ChallengeValidatedAnswer {
    challengeId: number;
    totalScore:number;
    challengeItemType:String;
    challengeItemAnswers: Array<ChallengeValidatedItemAnswer>;
    constructor() {
        this.challengeItemAnswers = new Array();
    }
}