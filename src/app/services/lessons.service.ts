import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Course } from 'app/common/course/course';
import { CourseDto } from 'app/common/course/coursedto';
import { LessonDto } from 'app/common/course/lessondto';


@Injectable({
    providedIn: "root"
})
export class LessonsService {
    endpoint = '/lessons';

    constructor(private apiService: ApiService) { }

    getLessonById(lessonId: number):Observable<LessonDto> {
        return this.apiService.get(`${this.endpoint}/${lessonId}`);
    }

}