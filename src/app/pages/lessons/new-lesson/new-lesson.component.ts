import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonsService } from 'app/services/lessons.service';
import { LessonDto } from 'app/common/course/lessondto';

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private lessonsService: LessonsService, private router: Router) { }

  lesson: LessonDto = new LessonDto();
  courseId: number;

  x:string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id'];
    });
  }

  createLesson() {
    this.lesson.courseId = this.courseId;
    this.lessonsService.createLesson(this.lesson);
    this.router.navigateByUrl('courses');
  }

}
