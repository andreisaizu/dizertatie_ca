import { Choice } from "./choice";

export class ChallengeItemTaskAnswer {
    challengeItemTaskId: number;
    selectedChoicesIds: Array<number>;
    constructor() {
        this.selectedChoicesIds = new Array();
    }
}