import { Component, OnInit, Input } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {
  @Input() challengeItem: ChallengeItem;

  displayedColumns: string[] = ['id', 'question', 'answer'];
  constructor() { }

  ngOnInit(): void {
  }

}
