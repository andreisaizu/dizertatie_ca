import { Component, OnInit } from '@angular/core';
import { Course } from 'app/common/course/course';
import { CoursesService } from 'app/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  course: Course = new Course();

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem('username');
    this.course.username = username;
  }

  createCourse() {
    this.coursesService.createCourse(this.course).subscribe(result => {
      this.router.navigateByUrl('courses');
    });

  }

}
