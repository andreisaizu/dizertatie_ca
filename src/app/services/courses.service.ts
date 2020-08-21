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

    getNotEnrolledCourses(): Observable<CourseDto> {
        return this.apiService.get(`${this.endpoint}/not-enrolled`);
    }

    getCourseById(courseId: number): Observable<Course> {
        return this.apiService.get(`${this.endpoint}/${courseId}`);
    }

    createCourse(course: Course) {
        return this.apiService.post(`${this.endpoint}/new-course`, course);
    }

    enrollToCourse(courseId: number) {
        return this.apiService.put(`${this.endpoint}/${courseId}/enroll`);
    }

}