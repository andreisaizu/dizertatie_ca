import { ChallengeItemAnswer } from "./challengeItemAnswer";

export class ChallengeAnswer {
    challengeId: number;
    challengeItemAnswers: Array<ChallengeItemAnswer>;
    constructor() {
        this.challengeItemAnswers = new Array();
    }
}