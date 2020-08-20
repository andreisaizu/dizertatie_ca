import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Course } from 'app/common/course/course';
import { CourseDto } from 'app/common/course/coursedto';


@Injectable({
    providedIn: "root"
})
export class CoursesService {
    endpoint = '/courses';

    constructor(private apiService: ApiService) { }

    getCoursesByUser(): Observable<CourseDto> {
        return this.apiService.get(`${this.endpoint}`);
    }

    getCourseById(courseId: number):Observable<Course> {
        return this.apiService.get(`${this.endpoint}/${courseId}`);
    }

}