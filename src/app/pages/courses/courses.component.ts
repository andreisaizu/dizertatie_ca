import { Component, OnInit } from '@angular/core';
import { Course } from 'app/common/course/course';
import { CoursesService } from 'app/services/courses.service';
import { JsonParserService } from 'app/services/jsonParser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDto } from 'app/common/course/coursedto';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {



  canEdit: boolean = false;
  private courseList: Array<Course> = new Array();
  private notEnrolledCourseList: Array<Course> = new Array();

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getCoursesByUser().subscribe(result => {
      this.courseList = result.courseList;
    });
    let role = sessionStorage.getItem('role');
    if (role == 'TEACHER') {
      this.canEdit = true;
    }
    this.coursesService.getNotEnrolledCourses().subscribe(result => {
      this.notEnrolledCourseList = result.courseList;
    })
  }

  goToComponent(url: string, id: number) {
    this.router.navigateByUrl(url + '/' + id);
  }

  addLesson(courseId: number) {
    this.router.navigateByUrl('courses/' + courseId + '/new-lesson');
  }


  enrollToCourse(courseId: number){
    this.coursesService.enrollToCourse(courseId).subscribe(result => {
      this.ngOnInit();
    });
    
  }

  addChallenge(courseId: number) {

  }

  addCourse() {
    this.router.navigateByUrl('courses/new-course');
  }

}
