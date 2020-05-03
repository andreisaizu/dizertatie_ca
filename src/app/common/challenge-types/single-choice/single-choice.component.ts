import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../../challenge/challenge';
import { ChallengeItem } from '../../challenge/challengeItem';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})
export class SingleChoiceComponent implements OnInit {

  @Input() challengeItem: ChallengeItem;

  constructor() { }

  ngOnInit(): void {
  }

}
