import { Component, OnInit } from '@angular/core';
import { LessonDto } from 'app/common/course/lessondto';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from 'app/services/lessons.service';

@Component({
  selector: 'app-variable-lesson',
  templateUrl: './variable-lesson.component.html',
  styleUrls: ['./variable-lesson.component.css']
})
export class VariableLessonComponent implements OnInit {

  edit:boolean = false;
  lesson: LessonDto = new LessonDto();
  constructor(private activatedRoute: ActivatedRoute, private lessonsService : LessonsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let lessonId = params['id'];
      this.lessonsService.getLessonById(lessonId).subscribe(result => {
        this.lesson = result;
      });
    });
  }

  editLesson(){
    this.edit = !this.edit;
  }

}
