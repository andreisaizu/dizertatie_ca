import { Choice } from "./choice";
import { ChoiceDto } from "./choiceDto";

export class ChallengeValidatedItemTaskAnswer {
    challengeItemTaskId: number;
    selectedChoicesIds: Array<number>;
    correctChoices: Array<ChoiceDto>;
    taskChoiceDtoList:Array<Choice>;
    correct:boolean;
    explanation:string;
    question:string;
    constructor() {
        this.selectedChoicesIds = new Array();
    }
}