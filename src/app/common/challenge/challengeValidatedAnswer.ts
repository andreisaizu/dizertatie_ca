import { ChallengeItemAnswer } from "./challengeItemAnswer";
import { ChallengeValidatedItemAnswer } from "./challengeValidatedItemAnswer";

export class ChallengeValidatedAnswer {
    challengeId: number;
    challengeItemAnswers: Array<ChallengeValidatedItemAnswer>;
    constructor() {
        this.challengeItemAnswers = new Array();
    }
}