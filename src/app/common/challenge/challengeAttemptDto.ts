import { ChallengeAttempt } from './challengeAttempt';

export class ChallengeAttemptDto {
    id:number;
    challengeAttemptList: Array<ChallengeAttempt>;

    constructor(){
        this.challengeAttemptList = new Array<ChallengeAttempt>();
    }
}