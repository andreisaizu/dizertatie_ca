import { Choice } from "./choice";

export class ChallengeItemTaskAnswer {
    challengeItemTaskId: number;
    selectedChoicesIds: Array<number>;
    selectedChoicesValues: Array<string>;
    correctChoicesValues: Array<string>;
    taskChoiceDtoList:Array<Choice>;
    correct:boolean;
    explanation:string;
    question:string;
    constructor() {
        this.selectedChoicesIds = new Array();
        this.selectedChoicesValues = new Array();
    }
}