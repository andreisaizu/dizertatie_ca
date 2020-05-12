import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-variable-lesson',
  templateUrl: './variable-lesson.component.html',
  styleUrls: ['./variable-lesson.component.css']
})
export class VariableLessonComponent implements OnInit {

  @Input() fromDialog:boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let x : number = 0;
  }

  goToChallenge(){
    let fromLesson:boolean = true;
    this.router.navigate(['/challenges/variable'], {state: {fromLesson: true}});
  }

}
