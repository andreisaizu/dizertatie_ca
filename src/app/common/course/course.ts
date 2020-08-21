import { LessonDto } from './lessondto';
import { ChallengeLight } from './challengelight';
import { Account } from './account';

export class Course {
    id:number;
    title:string;
    description:string;
    username:string;
    lessonList:Array<LessonDto>;
    challengeList:Array<ChallengeLight>;
    accountList:Array<Account>;
}