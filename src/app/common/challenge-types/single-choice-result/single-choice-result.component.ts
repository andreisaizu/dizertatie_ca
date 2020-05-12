import { Component, OnInit, Input } from '@angular/core';
import { ChallengeItem } from '../../challenge/challengeItem';

@Component({
  selector: 'app-single-choice-result',
  templateUrl: './single-choice-result.component.html',
  styleUrls: ['./single-choice-result.component.css']
})
export class SingleChoiceResultComponent implements OnInit {

  @Input() challengeItem: ChallengeItem;

  constructor() { }

  ngOnInit(): void {
  }


}
