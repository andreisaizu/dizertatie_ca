import { LessonDto } from './lessondto';
import { ChallengeLight } from './challengelight';

export class Course {
    id:number;
    title:string;
    description:string;
    lessonList:Array<LessonDto>;
    challengeList:Array<ChallengeLight>;
}