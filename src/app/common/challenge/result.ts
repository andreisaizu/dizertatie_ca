import { ChallengeItemAnswer } from "./challengeItemAnswer";

export class Result {
    challengeId: number;
    itemAnswers: Array<ChallengeItemAnswer>;
    constructor() {
        this.itemAnswers = new Array();
    }
}