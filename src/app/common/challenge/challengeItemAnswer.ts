import { ChallengeItemTaskAnswer } from "./challengeItemTaskAnswer";

export class ChallengeItemAnswer {
    challengeItemId: number;
    taskAnswers: Array<ChallengeItemTaskAnswer>;
    constructor() {
        this.taskAnswers = new Array();
    }
}