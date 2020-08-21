import { Course } from './course';

export class LessonDto {
    id: number;
    courseId: number;
    title: string;
    content: string;

    constructor() {
        this.title = " ";
        this.content = " ";
    }
}