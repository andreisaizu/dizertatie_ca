import { ChallengeItemTaskAnswer } from "./challengeItemTaskAnswer";
import { ChallengeValidatedItemTaskAnswer } from "./challengeValidatedItemTaskAnswer";

export class ChallengeValidatedItemAnswer {
    challengeItemId: number;
    type:String;
    taskAnswers: Array<ChallengeValidatedItemTaskAnswer>;
    constructor() {
        this.taskAnswers = new Array();
    }
}