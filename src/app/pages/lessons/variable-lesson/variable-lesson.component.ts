import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-variable-lesson',
  templateUrl: './variable-lesson.component.html',
  styleUrls: ['./variable-lesson.component.css']
})
export class VariableLessonComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let x : number = 0;
  }

}
